import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const Brands = () => {
    const context = useContext(CartContext)
    const arrayOfMainBrands = [{Name:'TVS', BackColor1:'218, 49, 49', BackColor2:'123, 128, 174'}, {Name:'Honda', BackColor1:'red', BackColor2:'red'}, {Name:'CFMoto', BackColor1:'blue', BackColor2:'blue'}]
    const [SelectedOptions, setSelectedOptions] = useState(0)
    const arrayOfBrands = [...new Set(context.Datos.map(car => car.product.Brand))]
    const firstFourBrands = arrayOfBrands.slice(0, 4)
    const [OpnenedBrands, setOpnenedBrands] = useState(false)

    if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {
    
    if (context.Section==='IndexBrands') {
        return (
            <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'HotProducts', 'IndexBrands')}} onTouchStart={context.handleTouchStart} id='IndexBrands' >
                <h3 style={{fontSize:context.fontPixel*2.5}}>Nuestras <span style={{color:'red', fontSize:context.fontPixel*3.2}}>Marcas <i className="bi bi-chevron-compact-down"></i></span> </h3>
                    <div id="BrandsRow">
                        {arrayOfMainBrands.map((item, index)=>{
                            return(
                                <img className='BrandOption' src={`./assets/logos/${item.Name}.png`} alt="" />
                            )
                        })}
                    </div>
                <h3 style={{fontSize:context.fontPixel*3.1}}>Contactanos </h3>
            </section>
          )
    }else if(context.Section==='HotProducts' && context.Presection==='IndexBrands'){
        return (
            <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'HotProducts', 'IndexBrands')}} onTouchStart={context.handleTouchStart} id='IndexBrandsToTop' >
                <h3 style={{fontSize:context.fontPixel*2.5}}>Nuestras <span style={{color:'red', fontSize:context.fontPixel*3.2}}>Marcas <i className="bi bi-chevron-compact-down"></i></span> </h3>
                    <div id="BrandsRow">
                        {arrayOfMainBrands.map((item, index)=>{
                            return(
                                <img className='BrandOption' src={`./assets/logos/${item.Name}.png`} alt="" />
                            )
                        })}
                    </div>
                <h3 style={{fontSize:context.fontPixel*3.1}}>Contactanos </h3>

            </section>
          )
    }
    }else{
        
        return(
            <section id="PCBrands">
                <div id="PCBrandsTitle">
                    <h2 style={{fontSize:context.fontPixel*4, letterSpacing: `calc(100vw / 7 - 1ch)`}} >MARCAS</h2>
                    <h3 style={{fontSize:context.fontPixel*1.8, letterSpacing: `calc(100vw / 15 - 1ch)`}} >MARCAS</h3>
                </div>
                {
                    OpnenedBrands===false
                    ?
                                    <div id="ContainerOfBrands">
                    <div id='LeftSide'>
                        {arrayOfMainBrands.map((item, index)=>{
                            return(
                                <div  className="BrandMainOption" id={`BrandMainOption${index}`} >
                                <img src={`./assets/logos/${item.Name}.jpg`} />
                                <p style={{fontSize: context.fontPixel*.35}} >{item.Name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div id='RightSide'>
                        <div id='TopSide'>
                            {
                                firstFourBrands.map((brand, index)=>{
                                    return(
                                    <p style={{fontSize: context.fontPixel*.3}} >
                                        {brand}
                                    </p>
                                    )
                               })
                            }
                        </div>
                        <div id='BottomSide'>
                            <button onClick={()=>{setOpnenedBrands(true)}} >Ver todas</button>
                        </div>
                    </div>
                </div>
                :
                <div id="ContainerOfBrandsOpened">
                    <div id="ContainerOptions">

                    </div>
                    <div id="BrandsOptionsDiv">
                        {
                            arrayOfBrands.map((item, index)=>{
                                return(
                                <div  className="BrandMainOption" id={`BrandMainOption${index}`} >
                                    <img src={`./assets/logos/${item}.jpg`} />
                                    <p style={{fontSize: context.fontPixel*.35}} >{item}</p>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
                }

            </section>
        )

    }
}

export default Brands