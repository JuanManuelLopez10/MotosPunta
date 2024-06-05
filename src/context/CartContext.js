import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { createContext, useRef, useState } from "react";
import db, { firebaseConfig, st } from "../data/FirestoreData";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ImageStorage, setImageStorage] = useState([])
    const [Width, setWidth] = useState(1)
    const [Heigth, setHeigth] = useState(1)
    const [Cart, setCart] = useState([])
    const [TotalQuantity, setTotalQuantity] = useState(0)
    const [Orientation, setOrientation] = useState('Landscape')
    const [Section, setSection] = useState('Wallpaper')
    const [Presection, setPresection] = useState(undefined)
    const [Screen, setScreen] = useState('Index')
    const [PreScreen, setPreScreen] = useState(undefined)
    const [MenuSelectedClass, setMenuSelectedClass] = useState(undefined)
    const startY = useRef(null);
    const [ProductShown, setProductShown] = useState(undefined)
    const [CartTotal, setCartTotal] = useState(0)
    const handleTouchStart = (event) => {
      startY.current = event.touches[0].clientY;
    };
  
    const handleTouchMove = (event, a, b, actual) => {
      if (startY.current !== null) {
        const currentY = event.touches[0].clientY;
        const deltaY = startY.current - currentY;
  
        if (deltaY > 100) {
          setSection(a);
          setPresection(actual)
          startY.current = null;
          setPresection(actual)
        }else if((deltaY < -100)){
          setSection(b);
          setPresection(actual)
          startY.current = null;
          setPresection(actual)

        }else{
            console.log('d');
        }
      }
    };

    const MoveToScreen = (actual, next) =>{
        
        setPreScreen(actual)
        setScreen(next)
        setPresection(undefined)
        setSection('Wallpaper')
    }

    const PostProductOnFirestore = async (product) => {
            const productsCollection = collection(db, 'products');
            try {
        const docRef = await addDoc(productsCollection, product);
        console.log('ID del producto: ' + docRef.id);
    } catch (error) {
        console.error('Error al agregar el producto:', error);
    }

            }
      
    
    const AddImages = async () => {
        const bucketRef = ref(st, firebaseConfig.storageBucket);
        const imageList = [];
        listAll(bucketRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    getMetadata(itemRef)
                        .then((metadata) => {
                            const title = metadata.name;
                            getDownloadURL(itemRef)
                                .then((url) => {
                                    imageList.push({ title, url });
                                    const arr = ImageStorage
                                    arr.push({ title, url })
                                    setImageStorage(arr)

                                })
                        })
                        .catch((error) => {
                            console.error("Error getting metadata:", error);
                        });
                });
            })

    }

    const AddToCart= (productId) => {
        const carrito = Cart
        setCartTotal(CartTotal + productId.Price)
        if(carrito.findIndex(producto => producto.productId===productId.productId)>-1 && carrito.findIndex(producto => producto.Option===productId.Option)>-1){
            const indexDelProducto = carrito.findIndex(producto => producto.productId===productId.productId && producto.Option===productId.Option)
            const producto = carrito[indexDelProducto]
            producto.cantidad = producto.cantidad + 1
            setCart(carrito)
        }else{
            const producto = productId
            producto.cantidad=1
            carrito.push(producto)
            setCart(carrito)
            setTotalQuantity(TotalQuantity + 1)

        }
    }
    const RemoveFromCart = (productId) => {
        const carrito = Cart
        const indexDelProducto = carrito.findIndex(producto => producto.productId===productId.productId && producto.Option===productId.Option)
        setCartTotal(CartTotal-carrito[indexDelProducto].Price*carrito[indexDelProducto].cantidad)
        carrito.splice(indexDelProducto, 1)
        setCart(carrito)
        setTotalQuantity(TotalQuantity-1)
    }
    const handleQuantity = (productId, evento) => {
        const carrito = Cart
        const producto = Cart.findIndex(producto => producto.productId === productId)
        if(evento==='Plus'){
            carrito[producto].cantidad += 1
            setCartTotal(CartTotal + carrito[producto].Price)
        }else if(evento==='Minus'){
            if(carrito[producto].cantidad===1){
                setCartTotal(CartTotal - carrito[producto].Price)

                carrito.splice(producto, 1)

                setTotalQuantity(TotalQuantity - 1)
            }else{
                setCartTotal(CartTotal - carrito[producto].Price)
                carrito[producto].cantidad -= 1
            }
        }
        setCart(carrito)
    }

    const [OpenMenu, setOperMenu] = useState(false)
    const handleOpenMenu = () => {
        if (OpenMenu === false) {
            console.log(OpenMenu);
            setOperMenu(true)
        } else {
            setOperMenu(false)
        }

    }

    const [currentScreen, setCurrentScreen] = useState('Inicio')
    const changeScreen = (screenselected) => {
        if (OpenMenu === true) {
            setOperMenu(false)
        }
        setCurrentScreen(screenselected)
    }

    const [SelectedCategory, setSelectedCategory] = useState()
    const changeCategory = (category) => {
        setSelectedCategory(category)
    }

    const [SelectedMoto, setSelectedMoto] = useState({})
    const selectMoto = (moto) => {
        setSelectedMoto(moto)
    }

    const fontPixel = Width/20


    const [Datos, setDatos] = useState([])
    const handleDatos = (datos) => {
        setDatos(datos)
    }

    const [Ofertas, setOfertas] = useState([])
    const handleOfertas = (datos) => {
        setOfertas(datos)
    }

    return (
        <CartContext.Provider value={{ CartTotal, RemoveFromCart, TotalQuantity, handleQuantity, AddToCart, Cart, setCart, ProductShown, setScreen, setProductShown, setSection, setMenuSelectedClass, MenuSelectedClass, MoveToScreen, setScreen, Screen, PreScreen, Section, setPresection, Presection, handleTouchStart, handleTouchMove, setWidth, setHeigth, PostProductOnFirestore, Orientation, setOrientation, ImageStorage, AddImages, setImageStorage, SelectedCategory, changeCategory, Ofertas, handleOfertas, currentScreen, changeScreen, selectMoto, SelectedMoto, Width, Heigth, fontPixel, Datos, handleDatos, OpenMenu, handleOpenMenu }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;