import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartButton = (props) => {
    const context = useContext(CartContext)
    const [Credit, setCredit] = useState(false)
    if(context.Cart.find(producto => producto.Class === 'motos') && Credit===false){
        setCredit(true)
    }

    return (
    <button onClick={()=>{props.setOpenPayment(true)}} id="CartButton" style={{fontSize:context.fontPixel*1.2}} >
        Ver métodos de pago
    </button>
)
}

export default CartButton