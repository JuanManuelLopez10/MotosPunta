import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const EspecialesIndex = () => {
    const context = useContext(CartContext)

    return (
    <section id='EspecialesIndex'>
        <div id='EspecialesTitle'>
            <h3>Especiales</h3>
        </div>
        <div id='EspecialesOfertas'>
        {
            context.Ofertas.map(item=>{
                return(
                    <Link key={item.offer.titulo} className='Oferta' to={'/'} style={{backgroundImage:`url(${item.offer.imagen})`}}>
                        <div className='OfertaText'>
                            <p className='OfertaTextTitle' style={{fontSize: context.Orientation==='Portrait' ? context.fontPixel*1.3 : context.fontPixel *.3}}>{item.offer.titulo}</p>
                            <p className='OfertaTextParraf' style={{fontSize: context.Orientation==='Portrait' ? context.fontPixel*.7 : context.fontPixel *.15}}>{item.offer.descripcion}</p>
                        </div>
                    </Link>
                )
            })
        }
        </div>

    </section>
  )
}

export default EspecialesIndex