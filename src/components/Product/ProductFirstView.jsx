import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../data/FirestoreData';
import FirstCarousel from './ProductFirstView/CarouselFirstOption';
import SecondCarousel from './ProductFirstView/CarouselSecondOption';
import ThirdCarousel from './ProductFirstView/CarouselThirdOption';

const ProductFirstView = (props) => {
    const context = useContext(CartContext)
    const producto = props.producto
    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedOption, setSelectedProduct] = useState(null)
    const [options, setOptions] = useState([])
    const articulos = props.articulos
    const [carouselPart, setcarouselPart] = useState(0)

    const FetchFromFirestore = async () => {
      const new_array = articulos.filter(prod => prod.product.title===producto.product.title)
      setOptions(new_array)
    } 
    
      if (producto && options.length===0 || producto && options[0].product.title!==producto.product.title) {
        
        FetchFromFirestore()
      }


          if (producto){
            if(options[0]){
              const all_sizes = [{size:"xs" ,aviable:producto.product.xs}, {size:"s", aviable:producto.product.s}, {size:"m", aviable:producto.product.m}, {size:"l", aviable:producto.product.l}, {size:"xl", aviable:producto.product.xl}, {size:"xxl", aviable:producto.product.xxl}]
              return(
                  <div id='FirstView' style={{height:'90vh', paddingTop:'20%'}}>
                    <h3>{producto.product.title}</h3>                    
                    <div >
                      
                        <FirstCarousel carouselPart={carouselPart} setSelectedSize={setSelectedSize} selectedSize={selectedSize} producto={producto} all_sizes={all_sizes} />
                        <SecondCarousel carouselPart={carouselPart} producto={producto} />
                        <ThirdCarousel carouselPart={carouselPart} producto={producto} options={options} />

                                            
                    </div>
                      {/* <div style={{position:"sticky", bottom:"10vh", width:"100vw", display:"flex", justifyContent:"center"}}>
                        <button onClick={()=>{setcarouselPart(0)}}>0</button>
                        <button onClick={()=>{setcarouselPart(1)}}>1</button>
                        <button onClick={()=>{setcarouselPart(2)}}>2</button>
                      </div> */}
                  </div>
                  )  
            }else{
              FetchFromFirestore()
            }
          }

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


export default ProductFirstView;