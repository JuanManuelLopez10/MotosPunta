import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [Orientation, setOrientation] = useState('')
    const [Width, setWidth] = useState('')
    const [Heigth, setHeigth] = useState('')
    const [SelectedMoto, setSelectedMoto] = useState({})

    const selectMoto = (moto) => {
        setSelectedMoto(moto)
        console.log(moto);
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

    const [DarkMode, setDarkMode] = useState(false)
    const handleMode = (Mode) => {
        setDarkMode(Mode)
    }

    const [Datos, setDatos] = useState([])
    const handleDatos = (datos) => {
        setDatos(datos)
    }
    return(
    <CartContext.Provider value={{selectMoto, SelectedMoto, Orientation, Width, Heigth, handleOrientation, handleFontPixel, fontPixel, DarkMode, handleMode, Datos, handleDatos}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;