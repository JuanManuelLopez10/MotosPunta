import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartProductsSection = () => {
    const context = useContext(CartContext)
    
  return (
    <div id='CartProductsSection'>
        {
            context.Cart.map((productId, key) => {
                const producto = context.Datos.find(producto => producto.id === productId.productId)
                return(
                    <div className="CartProductCard" key={key}>
                        <p style={{fontSize:context.fontPixel*1}} className="CardTitle">{producto.product.Brand} {producto.product.Model} {producto.product.Cilind} </p>
                        <div className="ImageAndPrice">
                            <img src={producto.product.Options[productId.Option].Image} alt="" />
                            <p>{producto.product.Coin} {producto.product.Price}</p>
                        </div>
                        <button className="DeleteButton" onClick={()=>{context.RemoveFromCart(productId)}}>
                            <i className="bi bi-trash-fill"></i>
                        </button>
                        <div className="QuantityDiv">
                            <button onClick={()=>{context.handleQuantity(productId.productId, 'Minus')}}>-</button>
                                <p>{productId.cantidad}</p>
                            <button onClick={()=>{context.handleQuantity(productId.productId, 'Plus')}}>+</button>
                        </div>
                    </div>                    
                )
            })
        }
    </div>
  )
}

export default CartProductsSection