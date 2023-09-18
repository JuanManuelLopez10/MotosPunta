import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [Orientation, setOrientation] = useState('')
    const [Width, setWidth] = useState('')
    const [Heigth, setHeigth] = useState('')
    const [Carrito, setCarrito] = useState([])
    const [TotalCash, setTotalCash] = useState(0)
    // const [OpenCreditModal, setOpenCreditModal] = useState(false)

    // const handleOpenCreditModal = () => {
        
    // }
    const addToCart = (product, opcionseleccionada) => {
        const newCart = Carrito
        console.log(Carrito);
        if(newCart.findIndex(item=> item.id === product.id )!== -1){
            const indexDelProducto = newCart.findIndex(item=> item.id === product.id)
            const producto = newCart[indexDelProducto]
            producto.cantidad= producto.cantidad+1
            console.log(producto);
            newCart.splice(indexDelProducto)
            newCart.push(producto)
            setCarrito(newCart)
        }else{
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
            if (product.Clase==='Cascos') {
                producto.design= opcionseleccionada.design
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
        if (OpenMenu===false){
            console.log(OpenMenu);
            setOperMenu(true)
        }else{
            setOperMenu(false)
        }

    }

    const [currentScreen, setCurrentScreen] = useState('Inicio')
    const changeScreen = (screenselected) =>{
        if (OpenMenu===true) {
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

    
    const handleOrientation = (text, width, heigth) => {
        setOrientation(text)
        setWidth(width)
        setHeigth(heigth)
    }

    const [fontPixel, setfontPixel] = useState()
    const handleFontPixel = (width) => {
        setfontPixel(width/20)
    }


    const [Datos, setDatos] = useState([])
    const handleDatos = (datos) => {
        setDatos(datos)
    }

    const [Ofertas, setOfertas] = useState([])
    const handleOfertas = (datos) => {
        setOfertas(datos)
    }
    
    return(
    <CartContext.Provider value={{restarPrecio, Carrito, TotalCash, removeFromCart, addToCart, SelectedCategory, changeCategory, Ofertas, handleOfertas, currentScreen, changeScreen, selectMoto, SelectedMoto, Orientation, Width, Heigth, handleOrientation, handleFontPixel, fontPixel, Datos, handleDatos, OpenMenu, handleOpenMenu}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;