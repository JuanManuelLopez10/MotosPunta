import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartHeader = () => {
    const context = useContext(CartContext)
  return (
    <div id="CartHeader">
        <h2 id="CartHeaderTitle">Carrito</h2>
        {
            context.Cart.length===0 ? 
            <p id="CartHeaderQuantity">Carrito vacío</p>
            :
            <p id="CartHeaderQuantity">{context.Cart.length} productos</p>
        }
    </div>
)
}

export default CartHeader