import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const HotProducts = () => {
    const context = useContext(CartContext)
    const [SelectedOption, setSelectedOption] = useState(0)
    const arrayOfHotProducts = context.Datos.filter(producto => producto.product.HotProduct==='SI')
    const prearrayOfCategories = arrayOfHotProducts.map(producto => producto.product.Class)
    const arrayOfCategories = prearrayOfCategories.filter((category, index) => prearrayOfCategories.indexOf(category) === index)
    const [ButtonPressed, setButtonPressed] = useState('Next')

    if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {
        if (context.Section==='HotProducts') {
            return (
                <section onTouchMove={(event) => {context.handleTouchMove(event, 'IndexBrands', 'Wallpaper', 'HotProducts')}} onTouchStart={context.handleTouchStart} id='IndexHotProducts' >
                    <h2>Productos destacados</h2>
                    {
                        arrayOfCategories.map((clase, index) => {
                            return(
                                <>
                                    <h3 key={`h3${index}`} >{clase.toUpperCase()}</h3>
                                    <div key={index} className='ClassRow'>
                                        {
                                            arrayOfHotProducts.filter(producto => producto.product.Class === clase).map((producto, i) => {
                                                return(
                                                    <Link key={`${clase}${i}`} to={`product/${producto.id}`}  onClick={()=>{context.setSection('FirstView')
                                                    context.setPresection('Wallpaper')
                                                    context.setScreen('Product')
                                                  }}className='ProductCard'>

                                                        <img src={producto.product.Options[0].Image} alt="" />
                                                        <h4 style={{fontSize:context.fontPixel}} >{producto.product.Brand} {producto.product.Model} {producto.product.Cilind} </h4>
                                                        <p className='ProductType' style={{fontSize:context.fontPixel*.7}}>{producto.product.Type}</p>
                                                        <p className='ProductPrice' style={{fontSize:context.fontPixel*1.1}}>{producto.product.Coin} {producto.product.Price}</p>
                                                        <button className="LikeButton">
                                                        <i className="bi bi-heart"></i>                                                    
                                                        </button>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>    
                                </>
                            )
                        })
                    }
                </section>
              )
        }else if(context.Section==='Wallpaper' && context.Presection==='HotProducts'){
            return (
                <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'Wallpaper', 'HotProducts')}} onTouchStart={context.handleTouchStart} id='IndexHotProductsAfter' >
                    <h2>Productos destacados</h2>
                    {
                        arrayOfCategories.map((clase, index) => {
                            return(
                                <>
                                    <h3 key={`h3${index}`} >{clase.toUpperCase()}</h3>
                                    <div key={index} className='ClassRow'>
                                        {
                                            arrayOfHotProducts.filter(producto => producto.product.Class === clase).map((producto, i) => {
                                                return(
                                                    <Link key={`${clase}${i}`}  to={`product/${producto.id}`}  onClick={()=>{context.setSection('FirstView')
                                                    context.setPresection('Wallpaper')
                                                    context.setScreen('Product')
                                                  }}className='ProductCard'>                                                    <div className="cardHeader">

                                                            <i className="bi bi-fire"></i>
                                                        </div>
                                                        <img src={producto.product.Options[0].Image} alt="" />
                                                        <h4 style={{fontSize:context.fontPixel}} >{producto.product.Brand} {producto.product.Model} {producto.product.Cilind} </h4>
                                                        <p className='ProductType' style={{fontSize:context.fontPixel*.7}}>{producto.product.Type}</p>
                                                        <p className='ProductPrice' style={{fontSize:context.fontPixel*1.1}}>{producto.product.Coin} {producto.product.Price}</p>
                                                        <button className="LikeButton">
                                                        <i className="bi bi-heart"></i>                                                    
                                                        </button>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>    
                                </>
                            )
                        })
                    }
                </section>
              )
        }else{
            return (
                <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'Wallpaper', 'HotProducts')}} onTouchStart={context.handleTouchStart} id='IndexHotProductsNext' >
                    <h2>Productos destacados</h2>
                    {
                        arrayOfCategories.map((clase, index) => {
                            return(
                                <>
                                    <h3 key={`key${index}`} >{clase.toUpperCase()}</h3>
                                    <div key={index} className='ClassRow'>
                                        {
                                            arrayOfHotProducts.filter(producto => producto.product.Class === clase).map((producto, i) => {
                                                return(
                                                    <Link key={`${clase}${i}`}  to={`product/${producto.id}`} onClick={()=>{context.setSection('FirstView')
                                                    context.setPresection('Wallpaper')
                                                    context.setScreen('Product')
                                                  }} className='ProductCard'>
                                                        <div className="cardHeader">
                                                            <i className="bi bi-fire"></i>
                                                        </div>
                                                        <img src={producto.product.Options[0].Image} alt="" />
                                                        <h4 style={{fontSize:context.fontPixel}} >{producto.product.Brand} {producto.product.Model} {producto.product.Cilind} </h4>
                                                        <p className='ProductType' style={{fontSize:context.fontPixel*.7}}>{producto.product.Type}</p>
                                                        <p className='ProductPrice' style={{fontSize:context.fontPixel*1.1}}>{producto.product.Coin} {producto.product.Price}</p>
                                                        <button className="LikeButton">
                                                        <i className="bi bi-heart"></i>                                                    
                                                        </button>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>    
                                </>
                            )
                        })
                    }
                </section>
              )
    
        }
    }else{
        if(arrayOfHotProducts.length>0){
            const texto = `${arrayOfHotProducts[SelectedOption].product.Model} ${arrayOfHotProducts[SelectedOption].product.Cilind?arrayOfHotProducts[SelectedOption].product.Cilind:''}`
            const cantidad = texto.length
            if (context.Screen==='Index') {
                return(
                    <section id="PCHotProducts">
                        <div id="HPSectionTitle">
                            <h2 style={{fontSize:context.fontPixel*4, letterSpacing: `calc(100vw / 7 - 1ch)`}} >DESTACADOS</h2>
                            <h3 style={{fontSize:context.fontPixel*1.8, letterSpacing: `calc(100vw / 15 - 1ch)`}} >DESTACADOS</h3>
                        </div>
                        <div id="ProductDiv">
                            <div id="DivOfImages">
                                {arrayOfHotProducts.map((producto, index) => {
                                    return(
                                        <img key={index} src={producto.product.Options[0].Image} alt="" className={SelectedOption===index?'Seleccionada' : 'NoSeleccionada'} />
                                    )
                                })
                                }
                            </div>
                            <div id="Informacion">
                                <h4 style={{fontSize:context.fontPixel*.8, letterSpacing: `calc(20vw / ${cantidad} - 1ch)`}}>{arrayOfHotProducts[SelectedOption].product.Model} {arrayOfHotProducts[SelectedOption].product.Cilind}</h4>
                                <div id="Buttons">
                                    <button onClick={()=>{
                                        setSelectedOption(SelectedOption===0?arrayOfHotProducts.length-1:SelectedOption-1)
                                        setButtonPressed('Prev')
                                    }} className={ButtonPressed==='Prev'?'BotonSelected':'BotonNoSelected'} style={{fontSize: context.fontPixel*.4, height: '60%'}}>
                                        {'<'}
                                    </button>
                                    <button onClick={()=>{
                                        setSelectedOption(SelectedOption===arrayOfHotProducts.length-1?0:SelectedOption+1)
                                        setButtonPressed('Next')
                                    }} className={ButtonPressed==='Next'?'BotonSelected':'BotonNoSelected'} style={{fontSize: context.fontPixel*.4, height: '60%'}}>
                                    {'>'}
                                    </button>
                                </div>
                                <p>{arrayOfHotProducts[SelectedOption].product.Brand}</p>
                                <p style={{fontSize:context.fontPixel*.35}}>{arrayOfHotProducts[SelectedOption].product.Benefits[0].Description}. {arrayOfHotProducts[SelectedOption].product.Benefits[1].Description}.</p>
                                <Link id='HotProductsViewMore' style={{fontSize:context.fontPixel*.2}} to={`/product/${arrayOfHotProducts[SelectedOption].id}`}> VER MÁS </Link>
                            </div>
                        </div>
                    </section>
                )                
            }else{
                return(
                    <section id="PCHotProductsClosed">
                        <div id="HPSectionTitle">
                            <h2 style={{fontSize:context.fontPixel*4, letterSpacing: `calc(100vw / 7 - 1ch)`}} >DESTACADOS</h2>
                            <h3 style={{fontSize:context.fontPixel*1.8, letterSpacing: `calc(100vw / 15 - 1ch)`}} >DESTACADOS</h3>
                        </div>
                        <div id="ProductDiv">
                            <img src={arrayOfHotProducts[SelectedOption].product.Options[0].Image} alt="" />
                            <div id="Informacion">
                                <h4 style={{fontSize:context.fontPixel*.8, letterSpacing: `calc(20vw / ${cantidad} - 1ch)`}}>{arrayOfHotProducts[SelectedOption].product.Model} {arrayOfHotProducts[SelectedOption].product.Cilind}</h4>
                                <div id="Buttons">
                                    <button onClick={()=>{
                                        setSelectedOption(SelectedOption===0?arrayOfHotProducts.length-1:SelectedOption-1)
                                        setButtonPressed('Prev')
                                    }} style={{fontSize: ButtonPressed==='Prev'? context.fontPixel*.8: context.fontPixel*.4, color:ButtonPressed==='Prev'?'red':'black', height: ButtonPressed==='Prev'?'100%':'60%', border: ButtonPressed==='Prev'?'solid red 1px':'solid black 1px'}}>
                                        {'<'}
                                    </button>
                                    <button onClick={()=>{
                                        setSelectedOption(SelectedOption===arrayOfHotProducts.length-1?0:SelectedOption+1)
                                        setButtonPressed('Next')
                                    }} style={{fontSize: ButtonPressed==='Next'? context.fontPixel*.8: context.fontPixel*.4, color:ButtonPressed==='Next'?'red':'black', height: ButtonPressed==='Next'?'100%':'60%', border: ButtonPressed==='Next'?'solid red 1px':'solid black 1px'}}>
                                    {'>'}
                                    </button>
                                </div>
                                <p>{arrayOfHotProducts[SelectedOption].product.Brand}</p>
                                <p style={{fontSize:context.fontPixel*.35}}>{arrayOfHotProducts[SelectedOption].product.Benefits[0].Description}. {arrayOfHotProducts[SelectedOption].product.Benefits[1].Description}.</p>
                                <Link id='HotProductsViewMore' style={{fontSize:context.fontPixel*.2}} to={`/product/${arrayOfHotProducts[SelectedOption].id}`}> VER MÁS </Link>
                            </div>
                        </div>
                    </section>
                )                
            }

        }

    }



}

export default HotProducts