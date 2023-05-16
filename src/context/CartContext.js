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


    return(
    <CartContext.Provider value={{Orientation, Width, Heigth, handleOrientation, handleFontPixel, fontPixel}}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;