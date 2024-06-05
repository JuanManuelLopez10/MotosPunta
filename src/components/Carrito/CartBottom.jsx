import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartBottom = () => {
    const context = useContext(CartContext)
    
  return (
    <div id='CartBottom'>
        <div id="Subtotal" style={{fontSize:context.fontPixel*1}} className="CartBottomDiv">
            <p className='CartBottomText'>Subtotal: </p>
            <p className='CartBottomText'>U$S {(context.CartTotal/1.22).toFixed(2)}</p>
        </div>
        
        <div id="IVA" style={{fontSize:context.fontPixel*1}} className="CartBottomDiv">
            <p className='CartBottomText'>IVA: </p>
            <p className='CartBottomText'>U$S {(context.CartTotal-context.CartTotal / 1.22).toFixed(2)}</p>
        </div>
        <div className="CartBottomDiv" style={{fontSize:context.fontPixel*1.5}} id="Precio">
        <p className='CartBottomText'>Total: </p>
            <p className='CartBottomText'>U$S {context.CartTotal.toFixed(0)}</p>
        </div>
    </div>
  )
}

export default CartBottom