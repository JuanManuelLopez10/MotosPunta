import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CartProductsSection from '../components/Carrito/CartProductsSection'
import CartHeader from '../components/Carrito/CartHeader'
import CartBottom from '../components/Carrito/CartBottom'
import CartButton from '../components/Carrito/CartButton'
import PaymentModal from '../components/Payment/PaymentModal'

const CartScreen = () => {
    const [OpenPayment, setOpenPayment] = useState(false)
    const context = useContext(CartContext)
    if (context.Screen==='Cart') {
        return (
            <div id='CartScreen'>
                <CartHeader/>
                <CartProductsSection/>
                <CartBottom/>
                <CartButton setOpenPayment={setOpenPayment} />
                <PaymentModal OpenPayment={OpenPayment} setOpenPayment={setOpenPayment} />
            </div>
          )
    }else{
        return (
            <div id='CartScreenClosed'>
            <CartHeader/>
            <CartProductsSection/>
            <CartButton setOpenPayment={setOpenPayment} />
            </div>
          )
    }

}

export default CartScreen