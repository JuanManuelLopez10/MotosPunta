import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'

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

    if (context.Orientation === 'Portrait' && wallpaperProduct) {
        if (wallpaperProduct.product) {
            if (wallpaperProduct.product.options) {
                if (wallpaperProduct.product.options[0]) {
                    return (

                        <div className='IndexWallpaper' style={{flexDirection:'column'}}>
                            <img id='WallpaperImage' src={`${wallpaperProduct.product.WallpaperImage}`} alt="" />
                            <h3 className='WallpaperTitle' style={{fontSize: context.fontPixel*5}} >{wallpaperProduct.product.model}</h3>
                            <div style={{height:'100%', alignSelf:'flex-end', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'end', width:'100%'}} >
                                {
                                        wallpaperProduct.product.Benefits.map(element => {
                                            return (
                                                <div style={{ display: 'flex', width: '25%', height: '30%', marginTop:'2%' }} >
                                                    <img style={{ height: '95%', marginRight: '4%', borderRadius: 20, boxShadow: '0px 0px 8px grey' }} src={element.Image} alt="" />
                                                </div>
                                            )
                                        })
                                    }

                            </div>                        
                        </div>
                    )
                }

            }

        }

    } else {

        if (wallpaperProduct.product) {
            if (wallpaperProduct.product.options) {
                if (wallpaperProduct.product.options[0]) {
                    return (
                        <>
                            <div className='IndexWallpaper'>
                                <img id='WallpaperImage' src={wallpaperImage !== '' ? wallpaperImage : wallpaperProduct.product.WallpaperImage} alt="" />
                                <h3 className='IndexWallpaperTitle' style={{ color: 'rgb(193, 193, 193)', zIndex: 1, fontSize: context.fontPixel * 4, alignSelf: 'flex-end' }}>{wallpaperProduct.product.model}</h3>
                                <h3 className='IndexWallpaperTitle' style={{ color: 'transparent', fontSize: context.fontPixel * 4, alignSelf: 'flex-end' }}>{wallpaperProduct.product.model}</h3>
                                <div style={{width: '10%', height: '40%', position: 'absolute', top: '20%', right:'10%', display:'flex', flexDirection:'column', justifyContent:'center', zIndex:10}} >
                                    {
                                        wallpaperProduct.product.options.length>1
                                        ?
                                        wallpaperProduct.product.options.map(element => {
                                            return (
                                            <button onClick={()=>{
                                                setWallpaperImage(element.image)
                                                console.log(wallpaperImage);
                                            }} style={{backgroundImage: `linear-gradient(${element.color}, ${element.color}, ${element.secondaryColor}, ${element.color})`, width:'17%', height:'8%', border: 'none', borderRadius:'100%', marginTop:'5%', marginBottom:'10%'}}></button>
                                                                            )
                                        })
                                        :''
                                    }
                                </div>
                                <div className='divBenefits' style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around' }}>
                                    {
                                        wallpaperProduct.product.Benefits.map(element => {
                                            return (
                                                <div style={{ display: 'flex', width: '25%', height: '60%', alignSelf:'flex-end' }} >
                                                    <img style={{ height: '95%', marginRight: '4%', borderRadius: 20, boxShadow: '0px 0px 5px grey' }} src={element.Image} alt="" />
                                                    <p style={{ color: 'white', fontSize: context.fontPixel *.3, alignSelf:'center'}} >{element.Name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <a className='InstaButton' href={wallpaperProduct.product.instapost} style={{ color: 'white', alignSelf:'center' }} >
                                    <i class="bi-instagram" style={{ fontSize: context.fontPixel * .8}}></i>
                                    </a>
                            </div>

                        </>
                    )
                }

            }

        }

        // return (
        //     <div className='IndexWallpaper' style={{backgroundImage: "url(https://iili.io/HUF5rQt.jpg)", backgroundSize: 'cover', justifyContent:'start'}}>

        //         <div className='IndexWallpaperCredit'>
        //             <h2 className='IndexWallpaperTitle' style={{fontSize: context.fontPixel / 1.2 }}>Solicitá ahora tu crédito por la web</h2> 
        //             <h3 className='IndexWallpaperSubtitle'  style={{fontSize: context.fontPixel / 2.5 }}>Fácil, rápido y accesible.</h3>
        //             <p className='IndexWallpaperSubtitle' style={{fontSize: context.fontPixel / 3 }}>Empezá el trámite por la web y llevarte tu moto en el día.</p>
        //             <button className='IndexWallpaperButton' style={{fontSize: context.fontPixel / 3.5 }}>Solicitar ahora</button>
        //         </div>

        //     </div>
        //       )
    }

}

export default IndexWallpaper