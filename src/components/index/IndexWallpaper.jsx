import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const IndexWallpaper = () => {
    const context = useContext(CartContext)
    if (context.Orientation==='Portrait') {
        return (
            <div className='IndexWallpaper' style={{backgroundImage: "url(https://iili.io/HUF5rQt.jpg)", backgroundSize: 'cover'}}>
                <button className='IndexWallpaperButton' style={{fontSize: context.fontPixel * 1.15}}>Solicitar crédito ahora</button>
            </div>
              )   
    }else{
        return (
            <div className='IndexWallpaper' style={{backgroundImage: "url(https://iili.io/HUF5rQt.jpg)", backgroundSize: 'cover', justifyContent:'start'}}>

                <div className='IndexWallpaperCredit'>
                    <h2 className='IndexWallpaperTitle' style={{fontSize: context.fontPixel / 1.2 }}>Solicitá ahora tu crédito por la web</h2> 
                    <h3 className='IndexWallpaperSubtitle'  style={{fontSize: context.fontPixel / 2.5 }}>Fácil, rápido y accesible.</h3>
                    <p className='IndexWallpaperSubtitle' style={{fontSize: context.fontPixel / 3 }}>Empezá el trámite por la web y llevarte tu moto en el día.</p>
                    <button className='IndexWallpaperButton' style={{fontSize: context.fontPixel / 3.5 }}>Solicitar ahora</button>
                </div>

            </div>
              )
    }

}

export default IndexWallpaper