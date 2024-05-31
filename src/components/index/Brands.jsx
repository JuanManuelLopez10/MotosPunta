import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Brands = () => {
    const context = useContext(CartContext)
    const arrayOfMainBrands = [{Name:'TVS', BackColor1:'218, 49, 49', BackColor2:'123, 128, 174'}, {Name:'Honda', BackColor1:'red', BackColor2:'red'}, {Name:'AGV', BackColor1:'red', BackColor2:'green'}, {Name:'CFMoto', BackColor1:'blue', BackColor2:'blue'}, {Name:'MT', BackColor1:'red', BackColor2:'red'} ]
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

}

export default Brands