import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ProductOptions from './ProductOptions'
import ProductBenefits from './ProductBenefits'

const ProductViewMore = (props) => {
    const context = useContext(CartContext)
    if (context.Section==='ProductViewMore') {
        return (
            <div id='ProductViewMore'>
                {
                    props.producto.product.Options.length>1 &&(
                        <ProductOptions setOptionSelected={props.setOptionSelected} OptionSelected={props.OptionSelected} producto={props.producto}/>
                    )
                }
                <ProductBenefits setBenefitSelected={props.setBenefitSelected} producto={props.producto}/>
                <button id="ProductScreenAddToCart" onClick={()=>{context.AddToCart({productId: props.producto.id, Price: props.producto.product.Price, Class: props.producto.product.Class, Option: props.producto.product.Options.length>1 ? props.OptionSelected : 0})}} style={{fontSize:context.fontPixel*1.2}}>Agregar al carrito</button>
            </div>
          )
    }

}

export default ProductViewMore