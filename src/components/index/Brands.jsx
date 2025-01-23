import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import brands from "../../data/brands.json"
const Brands = (props) => {
    const context = useContext(CartContext)
    const arrayOfMainBrands = brands
    const [SelectedOption, setSelectedOption] = useState(undefined)
    const Brands = brands

    const ArrayOfOptions = ['motos', 'cascos', 'indumentaria', 'accesorios']
    const firstFourBrands = Brands.slice(0, 4)
    const [OpnenedBrands, setOpnenedBrands] = useState(false)

    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {

        if (context.Section === 'IndexBrands') {
            return (
                <section onTouchMove={(event) => { context.handleTouchMove(event, 'Segundo', 'HotProducts', 'IndexBrands') }} onTouchStart={context.handleTouchStart} id='IndexBrands' >
                    <h3 style={{ fontSize: context.fontPixel * 2.5 }}>Nuestras <span style={{ color: 'red', fontSize: context.fontPixel * 3.2 }}>Marcas <i className="bi bi-chevron-compact-down"></i></span> </h3>
                    <div id="BrandsRow">
                        {arrayOfMainBrands.map((item, index) => {
                            return (
                                <img key={index} className='BrandOption' src={item.logo} alt="" />
                            )
                        })}
                    </div>
                    <h3 style={{ fontSize: context.fontPixel * 3.1 }}>Contactanos </h3>
                    <div id="ContactRow">
                        <a href="https://www.wa.me/59899673830"><i style={{fontSize:context.fontPixel*4, color:"green"}} className="bi bi-whatsapp"></i></a>
                        <a href="https://www.instagram.com/motospunta/?hl=es"><i style={{fontSize:context.fontPixel*4, color:"darkslateblue"}} className="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/MotosPuntaMaldonado/"><i style={{fontSize:context.fontPixel*4, color:"blue"}} className="bi bi-facebook"></i></a>
                    </div>
                </section>
            )
        } else if (context.Section === 'HotProducts' && context.Presection === 'IndexBrands') {
            return (
                <section onTouchMove={(event) => { context.handleTouchMove(event, 'Segundo', 'HotProducts', 'IndexBrands') }} onTouchStart={context.handleTouchStart} id='IndexBrandsToTop' >
                    <h3 style={{ fontSize: context.fontPixel * 2.5 }}>Nuestras <span style={{ color: 'red', fontSize: context.fontPixel * 3.2 }}>Marcas <i className="bi bi-chevron-compact-down"></i></span> </h3>
                    <div id="BrandsRow">
                        {arrayOfMainBrands.map((item, index) => {
                            return (
                                <img key={index} className='BrandOption' src={item.logo} alt={item.Name} />
                            )
                        })}
                    </div>
                    <h3 style={{ fontSize: context.fontPixel * 3.1 }}>Contactanos </h3>

                </section>
            )
        }
    } else {
        if (Brands.length > 0) {

            return (
                <section id={context.Screen === 'Index' ? "PCBrands" : "PCBrandsOut"}>
                    <div id="PCBrandsTitle">
                        <h2 style={{ fontSize: context.fontPixel * 4, letterSpacing: `calc(100vw / 7 - 1ch)` }} >MARCAS</h2>
                        <h3 style={{ fontSize: context.fontPixel * 1.8, letterSpacing: `calc(100vw / 15 - 1ch)` }} >MARCAS</h3>
                    </div>
                    {
                        OpnenedBrands === false
                            ?
                            <div id="ContainerOfBrands">
                                <div id='LeftSide'>
                                    {arrayOfMainBrands.map((item, index) => {
                                        if (index < 4) {
                                            return (
                                                <div key={index} className="BrandMainOption" id={`BrandMainOption${index}`} >
                                                    <img src={item.img} />
                                                    <p style={{ fontSize: context.fontPixel * .35 }} >{item.Name}</p>
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                                <div id='RightSide'>
                                    <div id='TopSide'>
                                        {
                                            firstFourBrands.map((brand, index) => {
                                                return (
                                                    <p key={index} style={{ fontSize: context.fontPixel * .3 }} >
                                                        {brand.Name}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                    <div id='BottomSide'>
                                        <button onClick={() => { setOpnenedBrands(true) }} >Ver todas</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div id="ContainerOfBrandsOpened">
                                <div id='BeforeContainer'>
                                    <div id='LeftSide'>
                                        {arrayOfMainBrands.map((item, index) => {
                                            return (
                                                <div className="BrandMainOption" id={`BrandMainOption${index}`} >
                                                    <img src={`./assets/logos/${item.Name}.jpg`} />
                                                    <p style={{ fontSize: context.fontPixel * .35 }} >{item.Name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div id='RightSide'>
                                        <div id='TopSide'>
                                            {
                                                firstFourBrands.map((brand, index) => {
                                                    return (
                                                        <p style={{ fontSize: context.fontPixel * .3 }} >
                                                            {brand.Brand}
                                                        </p>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div id='BottomSide'>
                                            <button onClick={() => { setOpnenedBrands(true) }} >Ver todas</button>
                                        </div>
                                    </div>
                                </div>

                                <div id="ContainerOptions">
                                    {
                                        ArrayOfOptions.map((item, index) => {
                                            return (
                                                <button onClick={() => {
                                                    setSelectedOption(item)
                                                }} style={{ backgroundColor: SelectedOption === item ? 'rgb(135, 138, 153)' : 'rgb(64, 66, 74)' }} className="BrandFilterOption">
                                                    {item.toUpperCase()}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                                <div id="BrandsOptionsDiv">
                                    {
                                        Brands.length > 0 ?
                                            Brands.map((item, index) => {
                                                if (SelectedOption === undefined || item.clase === SelectedOption) {
                                                    console.log(SelectedOption);

                                                    return (
                                                        <div className="BrandMainOption" id={`BrandMainOption${index}`} >
                                                            <img src={item.img} />
                                                            <p style={{ fontSize: context.fontPixel * .35 }} >{item.Name}</p>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div className="BrandMainOptionNot" id={`BrandMainOption${index}`} >
                                                            <img src={item.img} />
                                                            <p style={{ fontSize: context.fontPixel * .35 }} >{item.Name}</p>
                                                        </div>
                                                    )
                                                }
                                            })
                                            : ''
                                    }
                                </div>
                            </div>
                    }

                </section>
            )

        }
    }
}

export default Brands