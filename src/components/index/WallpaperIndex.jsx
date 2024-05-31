import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const WallpaperIndex = () => {
    const context = useContext(CartContext)
    let arrayOfProductsForWallpaper = []
    
    const [productShown, setproductShown] = useState(undefined)
    context.Datos.map(product => {
      if (product.product.Wallpaper===true) {
        arrayOfProductsForWallpaper.push(product)
        if (productShown===undefined) {
          setproductShown(product)
          
        }
      }
    })
    
    if (productShown!==undefined && context.Section==='Wallpaper') {
        return(
      <section onTouchMove={(event) => {context.handleTouchMove(event, 'HotProducts', 'Wallpaper', 'Wallpaper')}} onTouchStart={context.handleTouchStart} id='IndexWallpaper' >
        <h3 style={{fontSize: context.fontPixel*2.5}} >{productShown.product.Brand.toUpperCase()} {productShown.product.Model.toUpperCase()} {productShown.product.Cilind}</h3>
          <Link to={`product/${productShown.id}`} onClick={()=>{context.setSection('FirstView')
            context.setPresection('Wallpaper')
            context.setScreen('Product')
          }} id='IndexWallpaper-ViewMore' style={{fontSize: context.fontPixel*1.2}}>
            Ver más
          </Link>
          <img id='IndexWallpaper-ProductImage' src={productShown.product.Options[0].Image} alt="" />
      </section>
    )
    }else if (productShown!==undefined && context.Section!=='Wallpaper') {
      return(
    <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'Subiendo', 'Wallpaper')}} onTouchStart={context.handleTouchStart} id='IndexWallpaperAfter' >
      <h3 style={{fontSize: context.fontPixel*2.5}} >{productShown.product.Brand.toUpperCase()} {productShown.product.Model.toUpperCase()} {productShown.product.Cilind}</h3>
        <button id='IndexWallpaperAfter-ViewMore' style={{fontSize: context.fontPixel*1.2}}>
          Ver más
        </button>
        <img id='IndexWallpaperAfter-ProductImage' src={productShown.product.Options[0].Image} alt="" />
    </section>
  )
}
}

export default WallpaperIndex