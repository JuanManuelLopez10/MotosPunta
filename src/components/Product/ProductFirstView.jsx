import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductFirstView = (props) => {
    const context = useContext(CartContext)
    const producto = context.Datos.find(prod => prod.id===props.producto)
    const ViewMore = () => {
        context.setSection('ProductViewMore')
        context.setPresection('FirstView')
    }
        if (producto.product!==undefined) {
            if(context.Screen==='Product' || context.Screen==='Clase'){
                return (
                    <div id="ProductScreen">
                        <img id={producto.product.Class==='motos' ? 'ProductScreenIMGMoto' : 'ProductScreenIMGOtros'} src={producto.product.Options[producto.product.Options.length>props.OptionSelected ? props.OptionSelected : 0].Image} alt="" />
                        
                        <p id='ProductScreenBrand' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id='ProductScreenBrand2' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id="ProductScreenModel"  style={{fontSize:context.fontPixel*7}}>{producto.product.Pattern.toUpperCase()}</p>
                        <div id="ProductScreenPrice" style={{fontSize:context.fontPixel*2}} >
                            <p>{producto.product.Title}</p>
                            <p>{producto.product.Coin} {producto.product.Price}</p>
                            </div>
                        <div id="ProductScreenGradient">
                            <button id="ProductScreenViewMore" onClick={()=>{ViewMore('ProductOptions')}} style={{fontSize:context.fontPixel*1.2}}>Ver más</button>
                            <button id="ProductScreenAddToCart" onClick={()=>{context.AddToCart({productId: producto.id, Price:producto.product.Price, Class: producto.product.Class, Option: producto.product.Options.length>1 ? props.OptionSelected : 0})}} style={{fontSize:context.fontPixel*1.2}}>Agregar al carrito</button>
                        </div>
                    </div>
              )      
            }else{
                console.log(producto);
                
                return (
                    <div id="ProductScreenClosed">
                        <img id={producto.product.Class==='motos' ? 'ProductScreenIMGMoto' : 'ProductScreenIMGOtros'} src={producto.product.Options[producto.product.Options.length>props.OptionSelected ? props.OptionSelected : 0].Image} alt="" />
                        
                        <p id='ProductScreenBrand' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id='ProductScreenBrand2' style={{fontSize:context.fontPixel*6}}>{producto.product.Brand.toUpperCase()}</p>
                        <p id="ProductScreenModel"  style={{fontSize:context.fontPixel*7}}>{producto.product.Pattern.toUpperCase()}</p>
                        <div id="ProductScreenPrice" style={{fontSize:context.fontPixel*2}} >
                            <p>{producto.product.Brand} {producto.product.Pattern} {producto.product.Cilind}</p>
                            <p>{producto.product.Coin} {producto.product.Price}</p>
                            </div>
                        <div id="ProductScreenGradient">
                            <button id="ProductScreenViewMore" onClick={()=>{ViewMore('ProductOptions')}} style={{fontSize:context.fontPixel*1.2}}>Ver más</button>
                            <button id="ProductScreenAddToCart" onClick={()=>{context.AddToCart({productId: producto.id, Price:producto.product.Price, Class: producto.product.Class, Option: producto.product.Options.length>1 ? props.OptionSelected : 0})}} style={{fontSize:context.fontPixel*1.2}}>Agregar al carrito</button>
                        </div>
    
                    </div>
              )     
            }
    
        }

    

}

export default ProductFirstView