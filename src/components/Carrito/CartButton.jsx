import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const CartButton = () => {
    const context = useContext(CartContext)
    const [Credit, setCredit] = useState(false)
    if(context.Cart.find(producto => producto.Class === 'motos') && Credit===false){
        setCredit(true)
    }
    return (
    <button id="CartButton" style={{fontSize:context.fontPixel*1.2
    }}>
        {
            Credit===true
            ?
            'Ver métodos de pago'
            :
            'Comprar ahora'
        }
    </button>
)
}

export default CartButton