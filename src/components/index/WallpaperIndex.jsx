import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const WallpaperIndex = () => {
    const context = useContext(CartContext)
    // const estilos = {
    //   Index: {
    //     backgroundColor:
    //   }
    // }
  return (
    <Link to={'/'} id='WallpaperIndex'>
      
            <p className='titulo' style={{fontSize: context.Orientation==='Portrait' ? context.fontPixel*1.6 :  context.fontPixel *.7}} >Tramitá tu crédito rápido y sencillo</p>
            <p  style={{fontSize: context.Orientation==='Portrait' ? context.fontPixel*.6 :  context.fontPixel *.3}} >Hacé click acá y dá tu primer paso para llevarte tu moto</p>
    </Link>
  )
}

export default WallpaperIndex