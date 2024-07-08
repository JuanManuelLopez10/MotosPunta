import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { useLocation } from 'react-router-dom'
import ProductFirstView from '../components/Product/ProductFirstView'
import PCProductFirstView from '../components/Product/PCProductFirstView'
import ProductBenefits from '../components/Product/ProductBenefits'
import ProductViewMore from '../components/Product/ProductViewMore'
import ProductBenefitModal from '../components/Product/ProductBenefitModal'
import PCBenefits from '../components/Product/PCBenefits'
import PCColors from '../components/Product/PCColors'

const Product = () => {
    const context = useContext(CartContext)
    const productId = useLocation().pathname.split('/product/')[1]
    const producto = context.Datos.find(producto=>producto.id===productId)
    const [OptionSelected, setOptionSelected] = useState(0)
    const [BenefitSelected, setBenefitSelected] = useState(undefined)

    if (productId!==undefined) {
        context.setProductShown(productId)
    }
    
    if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {

        if(context.Screen==='Product' || context.Screen==='Clase'){
            return (
                <div id="Product1" >
                    <ProductFirstView producto={context.ProductShown} OptionSelected={OptionSelected}/>
                    <ProductViewMore setBenefitSelected={setBenefitSelected} setOptionSelected={setOptionSelected} OptionSelected={OptionSelected} producto={producto}/>
                    <ProductBenefitModal setBenefitSelected={setBenefitSelected} BenefitSelected={BenefitSelected}/>
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
    }else{
        if(context.Screen==='Product'){
            return(
                <div id="PCProductScreen">
                    <PCProductFirstView producto={context.ProductShown} setOptionSelected={setOptionSelected} OptionSelected={OptionSelected}/>
                    <PCBenefits producto={context.ProductShown}/>
                    <PCColors producto={context.ProductShown}/>
                </div>
            )
        }
    }

}

export default Product