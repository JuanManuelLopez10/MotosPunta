import React, { useContext, useRef } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const IndexWallpaperPC = () => {
    const {fontPixel} = useContext(CartContext)
    const [loaded, setLoaded] = useState(false)
    const videoRef = useRef(null)
    const playVideo = () => {
    if (videoRef.current) {
        videoRef.current.play();
        setLoaded(true);
      }
    }
    
    return (
            <div id='IndexWallpaperPC'>
                {
                    loaded===false
                    ?
                    <div id='IndexWallpaperPCIMG' style={{backgroundImage: `url(/assets/WallpaperIndexPc.jpg)`, backgroundSize:'cover'}} >
                        
                        <div>
                        <img id='IndexWallpaperPCIMG-Logo' className='animate__animated animate__fadeInLeftBig' src='/assets/logos/TVS.png' />
                        <h2 id='IndexWallpaperPCIMG-h2' className='animate__animated animate__fadeInLeftBig' style={{fontSize:fontPixel*1.5}} >
                            TVS RAIDER 125 3v
                        </h2>
                        <p id='IndexWallpaperPCIMG-p' className='animate__animated animate__fadeInUp' style={{fontSize:fontPixel*.3}}>¡Libera tu espíritu aventurero! Con su potente motor y tecnología de vanguardia, te lleva a nuevos horizontes con estilo y confianza. Descubrí la emoción de cada ruta.</p>
                        <Link to='/product/GdHGA0wRyptHVvBkX1ht' id='IndexWallpaperPCIMG-ViewMore' className='animate__animated animate__fadeInUp'>Ver más</Link>
                        </div>

                    </div>
                    :''
                }



                <video onLoad={playVideo} autoPlay src="/assets/wallpaperIndex.mp4"></video>
                <source src="/assets/wallpaperIndex.mp4" type="video/mp4" />
            </div>
          )
}

export default IndexWallpaperPC