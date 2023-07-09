import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const IndexWallpaper = () => {
    const context = useContext(CartContext)
    const [wallpaperProduct, setwallpaperProduct] = useState({})
    const [wallpaperImage, setWallpaperImage] = useState('')
    useEffect(() => {
        context.Datos.forEach(element => {
            if (element.product.sale) {
                setwallpaperProduct(element)
            }
        });
    })
    const select = (moto) => {
        context.selectMoto(moto)
    }
    if (wallpaperProduct.product) {
        if (wallpaperProduct.product.options) {
            if (wallpaperProduct.product.options[0]) {
                return (

                    <div className='ProductWallpaper'>
                        <div className='ProductWallpaperTitle' >
                            <h3 className='ProductWallpaperTitle' style={{ fontSize: context.fontPixel * 6 }} >{wallpaperProduct.product.model}</h3>
                        </div>
                        <div className='ProductWallpaperImage' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                            <img className='ProductWallpaperImage' src={`${wallpaperProduct.product.WallpaperImage}`} alt="" />
                        </div>
                        <div>

                            <div className='ProductWallpaperOpt'>
                                <h3 style={{ zIndex: 5 }}>U$S {wallpaperProduct.product.price}</h3>
                            </div>
                        </div>
                        <div className='ProductWallpaperBenefits' >
                            <Link style={{ fontSize: context.fontPixel * 1.2, color: 'wheat', textShadow: '0px 0px 5px black', fontWeight: '600' }} to={`/product/${wallpaperProduct.product.id}`}>Ver modelo</Link>
                        </div>
                    </div>
                )
            }

        }

    }


}

export default IndexWallpaper