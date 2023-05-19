import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [Orientation, setOrientation] = useState('')
    const [Width, setWidth] = useState('')
    const [Heigth, setHeigth] = useState('')
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
        console.log(DarkMode);
    }

    return(
    <CartContext.Provider value={{Orientation, Width, Heigth, handleOrientation, handleFontPixel, fontPixel, DarkMode, handleMode}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;