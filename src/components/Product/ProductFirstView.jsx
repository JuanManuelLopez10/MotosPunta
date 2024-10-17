import React, { useContext, useMemo, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductFirstView = (props) => {
    const context = useContext(CartContext);
    const producto = props.producto

    const [selectedOption, setSelectedProduct] = useState(0)
    
    
    if (producto) {
        return(
            <div id='FirstView' style={{width:'100vw', height:'80vh', paddingTop:'10%', backgroundColor:'#'+producto.product.Options[selectedOption].Colour}}>
                <img src={producto.product.Options[selectedOption].Image} alt={producto.product.Title} style={{width:'200%', position:'absolute', top:'-20vh', opacity:'0.1', left:'-50vw', zIndex:'1'}}/>
                <img src={producto.product.Options[selectedOption].Image} alt={producto.product.Title} style={{width:'100%', position:'relative', zIndex:2}}/>
                <div id='FirstViewOptions' style={{height:'18vh', marginTop:'-5vh', display:'flex', position:'relative', zIndex:'3', width:'100vw', overflow:'scroll'}}>
                    {
                        producto.product.Options.map((option, index) => {
                            if (index!==selectedOption) {
                                return (
                                    <button onClick={()=>{
                                        setSelectedProduct(index)
                                        console.log(index);
                                        }} key={index} style={{display:'flex', height:'100%', justifyContent:'center', background:'none', border:'none', marginLeft:'10vw', alignItems:'center'}}>
                                        <img src={option.Image} alt={option.Title} style={{height:'75%'}}></img>
                                    </button>
                                )                                
                            }
})
                    }
                </div>
            </div>
        )        
    }

    // const viewMore = () => {
    //     context.setSection('ProductViewMore');
    //     context.setPresection('FirstView');
    // };
    // console.log(props.producto);
    
    // if (!producto?.product) return null; // Retornar null si no se encuentra el producto

    // const optionIndex = producto.product.Options.length > props.OptionSelected ? props.OptionSelected : 0;
    // const productImage = producto.product.Options[optionIndex].Image;

    // const renderProductContent = () => (
    //     <>
    //         <img id={producto.product.Class === 'motos' ? 'ProductScreenIMGMoto' : 'ProductScreenIMGOtros'} src={productImage} alt="" />
    //         <p id='ProductScreenBrand' style={{ fontSize: context.fontPixel * 6 }}>{producto.product.Brand.toUpperCase()}</p>
    //         <p id='ProductScreenBrand2' style={{ fontSize: context.fontPixel * 6 }}>{producto.product.Brand.toUpperCase()}</p>
    //         <p id="ProductScreenModel" style={{ fontSize: context.fontPixel * 7 }}>{producto.product.Pattern.toUpperCase()}</p>
    //         <div id="ProductScreenPrice" style={{ fontSize: context.fontPixel * 2 }}>
    //             <p>{producto.product.Title}</p>
    //             <p>{producto.product.Coin} {producto.product.Price}</p>
    //         </div>
    //         <div id="ProductScreenGradient">
    //             <button id="ProductScreenViewMore" onClick={viewMore} style={{ fontSize: context.fontPixel * 1.2 }}>Ver más</button>
    //         </div>
    //     </>
    // );

    // return (
    //     <div id={context.Screen === 'Product' || context.Screen === 'Clase' ? 'ProductScreen' : 'ProductScreenClosed'}>
    //         {renderProductContent()}
    //     </div>
    // );
};

export default ProductFirstView;