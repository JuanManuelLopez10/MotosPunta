import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useLocation } from 'react-router-dom'
import ProductFirstView from '../components/Product/ProductFirstView'
import ProductOptions from '../components/Product/ProductOptions'
import ProductBenefits from '../components/Product/ProductBenefits'
import ProductViewMore from '../components/Product/ProductViewMore'

const Product = () => {
    const context = useContext(CartContext)
    const productId = useLocation().pathname.split('/product/')[1]
    const producto = context.Datos.find(producto=>producto.id===productId)
    const [OptionSelected, setOptionSelected] = useState(0)
    if (productId!==undefined) {
        context.setProductShown(productId)
    }
        if(context.Screen==='Product' || context.Screen==='Clase'){
            return (
                <div id="Product1" >
                    <ProductFirstView producto={context.ProductShown} OptionSelected={OptionSelected}/>
                    <ProductViewMore setOptionSelected={setOptionSelected} OptionSelected={OptionSelected} producto={producto}/>
                </div>
          )
    
        }else{
            return (
                <div id="ProductClosed" >
                    <ProductFirstView producto={context.ProductShown} OptionSelected={OptionSelected}/>
                    <ProductViewMore setOptionSelected={setOptionSelected} OptionSelected={OptionSelected} producto={producto}/>
                </div>
          )
    
        }
    

}

export default Product