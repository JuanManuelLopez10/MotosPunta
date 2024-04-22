import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { createContext, useState } from "react";
import db, { firebaseConfig, st } from "../data/FirestoreData";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ImageStorage, setImageStorage] = useState([])
    const [Width, setWidth] = useState(1)
    const [Heigth, setHeigth] = useState(1)
    const [Carrito, setCarrito] = useState([])
    const [TotalCash, setTotalCash] = useState(0)
    const [Orientation, setOrientation] = useState('Landscape')

    
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

    const addToCart = (product, opcionseleccionada) => {
        const newCart = Carrito
        console.log(Carrito);
        if (newCart.findIndex(item => item.id === product.id) !== -1) {
            const indexDelProducto = newCart.findIndex(item => item.id === product.id)
            const producto = newCart[indexDelProducto]
            producto.cantidad = producto.cantidad + 1
            console.log(producto);
            newCart.splice(indexDelProducto)
            newCart.push(producto)
            setCarrito(newCart)
        } else {
            const producto = {
                id: product.id,
                Clase: product.Clase,
                brand: product.brand,
                model: product.model,
                model: product.model,
                cantidad: 1,
                color: opcionseleccionada.colorName,
                image: opcionseleccionada.image,
                price: product.price
            }
            if (product.Clase === 'Cascos') {
                producto.design = opcionseleccionada.design
            }
            newCart.push(producto)
            setCarrito(newCart)

        }
        const precio = parseInt(product.price)
        const precionuevo = TotalCash + precio
        setTotalCash(precionuevo)
    }
    const removeFromCart = (product) => {
        const newCart = Carrito
        const indexDelProducto = newCart.findIndex(item => item.id === product)
        newCart.splice(indexDelProducto, 1)
        console.log(Carrito);
        setCarrito(newCart)
    }
    const restarPrecio = (product) => {
        const indexDelProducto = Carrito.findIndex(item => item.id === product)
        const preciototal = Carrito[indexDelProducto].price * Carrito[indexDelProducto].cantidad
        console.log(TotalCash);
        const nuevoprecio = TotalCash - preciototal
        setTotalCash(nuevoprecio)
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
        <CartContext.Provider value={{ setWidth, setHeigth, PostProductOnFirestore, Orientation, setOrientation, ImageStorage, AddImages, setImageStorage, restarPrecio, Carrito, TotalCash, removeFromCart, addToCart, SelectedCategory, changeCategory, Ofertas, handleOfertas, currentScreen, changeScreen, selectMoto, SelectedMoto, Width, Heigth, fontPixel, Datos, handleDatos, OpenMenu, handleOpenMenu }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;