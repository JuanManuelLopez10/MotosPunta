import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductScreen = () => {
    const { idProduct } = useParams();
    const context = useContext(CartContext)

    let product
    context.Datos.map(item=>{
        if (item.product.id===idProduct) {
            console.log(item);
            product= item.product
        }
    })

  return (
    <>
    <div className='ProductScreen'>
    <div className='ProductWallpaper'>
       <div className='ProductWallpaperTitle' >
       <h3 className='ProductWallpaperTitle' style={{fontSize: context.fontPixel*5}} >{product.model}</h3>
       </div>

       <div className={product.Clase==='Motos' ? 'ProductWallpaperImage' : 'ProductWallpaperImageNoMoto'} style={{width:'100%', height:'100%'}}>
       <img className={product.Clase==='Motos' ? 'ProductWallpaperImage' : 'ProductWallpaperImageNoMoto'} src={`${product.WallpaperImage}`} alt="" />
       </div>
       <div>
        
        <div className='ProductWallpaperOpt'>
        <h3 style={{zIndex:5}}>U$S {product.price}</h3>
        <button style={{height:'20%', zIndex:5}} >Solicitar crédito</button>
        </div>
       </div>
      <div className='ProductWallpaperBenefits' >
        <h4 style={{fontSize:context.fontPixel*1.2}} >{product.description}</h4>
      </div>
    </div>
    <section>
      {
        product.Benefits.map(item=>{
          return(
            <div className='BenefitProduct' style={{display:'flex', width:'100%', alignItems:'center'}} >
              <img src={item.Image} alt="" className='ProductBenefitImage'/>
              <div style={{height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}} >
                <p className='ProductBenefitText' style={{fontSize:context.fontPixel*1.2}}>{item.Name}</p>
              </div>
            </div>
          )
        })
      }
    </section>
    </div>
    </>
  )
}

export default ProductScreen