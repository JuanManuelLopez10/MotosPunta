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
 
    const [Datas, setData] = useState([])
    const [Datos, setDatos] = useState([])
    const [FilteredOptions, setFilteredOptions] = useState(Datos)

    const handleDatos = async () => {
        const sheetId = '1onet03eLoYXNx-2cYOjbFG-SHiDy4J54eX_CcQZyy-c'; // Reemplaza con tu ID de hoja de cálculo
        const apiKey = 'AIzaSyABqba1Q5R3aDyMVePc7DcBFzzqGCk04ic'; // Reemplaza con tu clave de API
        const range = 'Hoja10!A1:AJ100'; // Ajusta el rango según tu hoja de cálculo
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  
        try {
          const response = await fetch(url);
          const result = await response.json();
          const resultado = []
            setData(result.values);
            Datas.map(productto => {
                if (resultado.findIndex(prod => prod===productto)!=0) {
                  const Benefits=[]
                  const Benefits1 = {
                    Title:productto[16],
                    Description:productto[17],
                    Image:productto[18],
                  }
                  Benefits.push(Benefits1)
                  const Benefits2 = {
                    Title:productto[19],
                    Description:productto[20],
                    Image:productto[21],
                  }
                  Benefits.push(Benefits2)
                  const Benefits3 = {
                    Title:productto[22],
                    Description:productto[23],
                    Image:productto[24],
                  }
                  Benefits.push(Benefits3)
                  const Benefits4 = productto[25]!=='' ?{
                    Title:productto[25],
                    Description:productto[26],
                    Image:productto[27],
                  }:undefined
                  Benefits4!==undefined && Benefits.push(Benefits4)
                  const Benefits5 = productto[28]!=='' ?{
                    Title:productto[28],
                    Description:productto[29],
                    Image:productto[30],
                  }:undefined
                  Benefits5!==undefined && Benefits.push(Benefits5)
                  const Benefits6 = productto[31]!=='' ?{
                    Title:productto[31],
                    Description:productto[32],
                    Image:productto[33],
                  }:undefined
                  Benefits6!==undefined && Benefits.push(Benefits6)
                  const indexDelProducto = resultado.findIndex(pro => pro.id===productto[9])
                  if (Datas.findIndex(p=>p===productto)!==0) {
                    if (indexDelProducto===-1) {
                        const producto = {
                          id:productto[9],
                          product:{
                            Description:productto[4],
                            Benefits:Benefits,
                            Brand:productto[7],
                            Cilind:productto[15],
                            Class:productto[11],
                            Model: productto[14],
                            Title: productto[1],
                            Price:parseFloat(productto[6].replace(' USD', '')),
                            Type:productto[13],
                            Options:[{
                              Color:productto[10],
                              Design:productto[12],
                              Image:productto[3]
                            }],
                            featured: productto[35]==='SI'?true:false,
                            Wallpaper: productto[34]==='SI'?true:false,
                          }
                        }
                        resultado.push(producto)
                      }else{
                        resultado[indexDelProducto].product.Options.push({
                          Color:productto[10],
                          Design:productto[12],
                          Image:productto[3]
                        }) 
                      }
                  }

                  setDatos(resultado)
                }
              })


            }          
         catch (error) {
          console.error('Error al obtener los datos de la hoja de cálculo', error);
        }
      };
    const [BrandFilters, setBrandFilters] = useState(undefined)
    const HandleChangeBrand = (a) =>{
      setBrandFilters(a)
    }
    const [CilindFilters, setCilindFilters] = useState(undefined)
    const HandleChangeCilind = (a) =>{
      setCilindFilters(a)
    }
    const [MaxPriceFilters, setMaxPrice] = useState(1000000)
    const [MinPriceFilters, setMinPrice] = useState(0)
    const filterPrice = (a, b) =>{
      setMaxPrice(a)
      setMinPrice(b)
    }
    const [Ofertas, setOfertas] = useState([])

    const handleOfertas = (datos) => {
        setOfertas(datos)
    }

    return (
        <CartContext.Provider value={{ MinPriceFilters, filterPrice, MaxPriceFilters, CilindFilters, BrandFilters, HandleChangeBrand, HandleChangeCilind,CartTotal, setDatos, RemoveFromCart, TotalQuantity, handleQuantity, AddToCart, Cart, setCart, ProductShown, setScreen, setProductShown, setSection, setMenuSelectedClass, MenuSelectedClass, MoveToScreen, setScreen, Screen, PreScreen, Section, setPresection, Presection, handleTouchStart, handleTouchMove, setWidth, setHeigth, PostProductOnFirestore, Orientation, setOrientation, ImageStorage, AddImages, setImageStorage, SelectedCategory, changeCategory, Ofertas, handleOfertas, currentScreen, changeScreen, selectMoto, SelectedMoto, Width, Heigth, fontPixel, Datos, handleDatos, OpenMenu, handleOpenMenu }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;