import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ProductFirstView = (props) => {
    const context = useContext(CartContext)
    const producto = context.Datos.find(prod => prod.id===props.producto)
    console.log(producto);
    const ViewMore = () => {
        context.setSection('ProductViewMore')
        context.setPresection('FirstView')
    }
        if (producto!==undefined) {
            if(context.Screen==='Product' || context.Screen==='Clase'){
                return (
                    <div id="ProductScreen">
                        <img id={producto.product.Class==='motos' ? 'ProductScreenIMGMoto' : 'ProductScreenIMGOtros'} src={producto.product.Options[producto.product.Options.length>props.OptionSelected ? props.OptionSelected : 0].Image} alt="" />
                        
                        <p id='ProductScreenBrand' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id='ProductScreenBrand2' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id="ProductScreenModel"  style={{fontSize:context.fontPixel*7}}>{producto.product.Model.toUpperCase()}</p>
                        <div id="ProductScreenPrice" style={{fontSize:context.fontPixel*2}} >
                            <p>{producto.product.Brand} {producto.product.Model} {producto.product.Cilind}</p>
                            <p>{producto.product.Coin} {producto.product.Price}</p>
                            </div>
                        <div id="ProductScreenGradient">
                            <button id="ProductScreenViewMore" onClick={()=>{ViewMore('ProductOptions')}} style={{fontSize:context.fontPixel*1.2}}>Ver más</button>
                            <button id="ProductScreenAddToCart" style={{fontSize:context.fontPixel*1.2}}>Agregar al carrito</button>
                        </div>
                    </div>
              )      
            }else{
                return (
                    <div id="ProductScreenClosed">
                        <img id={producto.product.Class==='motos' ? 'ProductScreenIMGMoto' : 'ProductScreenIMGOtros'} src={producto.product.Options[producto.product.Options.length>props.OptionSelected ? props.OptionSelected : 0].Image} alt="" />
                        
                        <p id='ProductScreenBrand' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id='ProductScreenBrand2' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id="ProductScreenModel"  style={{fontSize:context.fontPixel*7}}>{producto.product.Model.toUpperCase()}</p>
                        <div id="ProductScreenPrice" style={{fontSize:context.fontPixel*2}} >
                            <p>{producto.product.Brand} {producto.product.Model} {producto.product.Cilind}</p>
                            <p>{producto.product.Coin} {producto.product.Price}</p>
                            </div>
                        <div id="ProductScreenGradient">
                            <button id="ProductScreenViewMore" onClick={()=>{ViewMore('ProductOptions')}} style={{fontSize:context.fontPixel*1.2}}>Ver más</button>
                            <button id="ProductScreenAddToCart" style={{fontSize:context.fontPixel*1.2}}>Agregar al carrito</button>
                        </div>
    
                    </div>
              )     
            }
    
        }

    

}

export default ProductFirstView