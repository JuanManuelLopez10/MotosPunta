import React, { useContext, useEffect, useMemo, useState } from 'react';

import FirstCarousel from './ProductFirstView/CarouselFirstOption';
import SecondCarousel from './ProductFirstView/CarouselSecondOption';
import ThirdCarousel from './ProductFirstView/CarouselThirdOption';

const ProductFirstView = (props) => {
    const producto = props.producto
    const [selectedSize, setSelectedSize] = useState(0)
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
                        <ThirdCarousel setproducto={props.setproducto}  carouselPart={carouselPart} producto={producto} options={options} />

                                            
                    </div>

                  </div>
                  )  
            }else{
              FetchFromFirestore()
            }
          }

    }



export default ProductFirstView;