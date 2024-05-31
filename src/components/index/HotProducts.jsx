import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const HotProducts = () => {
    const context = useContext(CartContext)
    const arrayOfHotProducts = context.Datos.filter(producto => producto.product.featured)
    const prearrayOfCategories = arrayOfHotProducts.map(producto => producto.product.Class)
    const arrayOfCategories = prearrayOfCategories.filter((category, index) => prearrayOfCategories.indexOf(category) === index)
    if (context.Section==='HotProducts') {
        return (
            <section onTouchMove={(event) => {context.handleTouchMove(event, 'IndexBrands', 'Wallpaper', 'HotProducts')}} onTouchStart={context.handleTouchStart} id='IndexHotProducts' >
                <h2>Productos destacados</h2>
                {
                    arrayOfCategories.map(clase => {
                        return(
                            <>
                                <h3>{clase.toUpperCase()}</h3>
                                <div className='ClassRow'>
                                    {
                                        arrayOfHotProducts.filter(producto => producto.product.Class === clase).map(producto => {
                                            return(
                                                <Link to={`product/${producto.id}`}  onClick={()=>{context.setSection('FirstView')
                                                context.setPresection('Wallpaper')
                                                context.setScreen('Product')
                                              }}className='ProductCard' key={producto.id}>
                                                    <div className="cardHeader">
                                                        <div className="Stars">
                                                        <i className={producto.product.Opinion.Number<0.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<1.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<2.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<3.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<4.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        </div>
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
    }else if(context.Section==='Wallpaper' && context.Presection==='HotProducts'){
        return (
            <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'Wallpaper', 'HotProducts')}} onTouchStart={context.handleTouchStart} id='IndexHotProductsAfter' >
                <h2>Productos destacados</h2>
                {
                    arrayOfCategories.map(clase => {
                        return(
                            <>
                                <h3>{clase.toUpperCase()}</h3>
                                <div className='ClassRow'>
                                    {
                                        arrayOfHotProducts.filter(producto => producto.product.Class === clase).map(producto => {
                                            return(
                                                <Link to={`product/${producto.id}`}  onClick={()=>{context.setSection('FirstView')
                                                context.setPresection('Wallpaper')
                                                context.setScreen('Product')
                                              }}className='ProductCard' key={producto.id}>                                                    <div className="cardHeader">
                                                        <div className="Stars">
                                                        <i className={producto.product.Opinion.Number<0.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<1.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<2.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<3.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<4.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        </div>
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
                    arrayOfCategories.map(clase => {
                        return(
                            <>
                                <h3>{clase.toUpperCase()}</h3>
                                <div className='ClassRow'>
                                    {
                                        arrayOfHotProducts.filter(producto => producto.product.Class === clase).map(producto => {
                                            return(
                                                <Link to={`product/${producto.id}`}  onClick={()=>{context.setSection('FirstView')
                                                context.setPresection('Wallpaper')
                                                context.setScreen('Product')
                                              }} className='ProductCard' key={producto.id}>
                                                    <div className="cardHeader">
                                                        <div className="Stars">
                                                        <i className={producto.product.Opinion.Number<0.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<1.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<2.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<3.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        <i className={producto.product.Opinion.Number<4.5 ? "bi bi-star" : "bi bi-star-fill" }></i>
                                                        </div>
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


}

export default HotProducts