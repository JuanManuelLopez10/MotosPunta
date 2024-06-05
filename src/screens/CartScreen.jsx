import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartProductsSection from '../components/Carrito/CartProductsSection'
import CartHeader from '../components/Carrito/CartHeader'
import CartBottom from '../components/Carrito/CartBottom'
import CartButton from '../components/Carrito/CartButton'

const CartScreen = () => {
    const context = useContext(CartContext)
    if (context.Screen==='Cart') {
        return (
            <div id='CartScreen'>
                <CartHeader/>
                <CartProductsSection/>
                <CartBottom/>
                <CartButton/>
            </div>
          )
    }else{
        return (
            <div id='CartScreenClosed'>
            <CartHeader/>
            <CartProductsSection/>
            <CartBottom/>
            </div>
          )
    }

}

export default CartScreen