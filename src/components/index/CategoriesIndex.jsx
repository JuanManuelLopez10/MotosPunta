import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CategoriesIndex = () => {
    const categories = ['Motos', 'Cascos', 'Indumentaria', 'Accesorios']
    const context = useContext(CartContext)
    
    return (
    <section id='CategoriesIndex' >
        <div id='CategoriesTitle'>
            <h3>Categorías</h3>
        </div>

        <div id='CategoriesContainer' >
            {
                categories.map(item=>{  
                    let firstProduct = false
                    context.Datos.map(producto=>{
                        if (producto.product.Clase===item && firstProduct===false) {

                            firstProduct= producto.product.options[0].image
                        }
                    })
                    return(
                        <Link key={item} to={`/clase/${item}`} onClick={()=>{context.changeScreen(item)}} className='col-5 col-lg-3' style={{height: '80%'}}>
                            <div className='Categorie' style={{justifyContent: item==='Motos'?'end':'center', marginRight:'5%', width: context.Orientation==='Portrait' ? '100%' : '95%', height: '100%', }}>
                                <img style={{height:item==='Motos'?'130%':'80%'}} src={firstProduct===false ?'' : firstProduct} alt="" />
                                {
                                    item==='Indumentaria'
                                    ?
                                        <p>Indum.</p>
                                    :
                                        <p>{item==='Accesorios' ? 'Acces.' : item}</p>

                                }
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default CategoriesIndex