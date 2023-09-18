import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ClassStore = (props) => {
    const context = useContext(CartContext)
    let productos = []
    const getProducts = () => {
      props.datos.map(item=>{
        if (item.category!==context.SelectedCategory) {
         productos.push(item) 
        }
      })
    }
    getProducts()

    let categorias = []
    productos.map(producto=>{
        if (categorias.includes(producto.category)===false) {
            categorias.push(producto.category)
        }
    })
    if (context.Orientation==='Portrait') {
        return (
            <div id='Store'>
                {
                    categorias.map(category=>{
                        let CategoryProducts = []
                        productos.map(product=>{
                            if (product.category===category) {
                                CategoryProducts.push(product)
                            }
                        })
                        return(
                            <>
                            <h4 id={`h4${category}`}>{category}</h4>
                            <div id={`div${category}`} className='categoryRow' >
                                {
                                    CategoryProducts.map(producto=>{
                                        return(
                                            <Link key={producto.model} to={'/product/'+producto.id} style={{alignItems:producto.Clase==='Motos' ? 'flex-end' : 'center', backgroundImage: `linear-gradient(-50deg, ${producto.options[0].color}, #262626)`}} className='categoryRowCard col-5 m-2'>
                                                <img style={{width:producto.Clase==='Motos'? '200%' : '90%', marginTop:producto.Clase==='Motos'? '-50%' : '10%'}} src={producto.options[0].image} alt="" />
                                                <div>
                                                    <p>{producto.brand} {producto.model}</p>
                                                    <p>U$S {producto.price}</p>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                            </>
                        )
                    })
                }
            </div>
          )        
    }else{
        return(
            <div id='Store'>

                                {
                                    props.datos.map(producto=>{
                                        if (context.SelectedCategory===false || producto.category===context.SelectedCategory) {
                                            return(
                                                <Link key={'aaa'+producto.model} to={'/product/'+producto.id}  style={{alignItems:producto.Clase==='Motos' ? 'flex-end' : 'center', backgroundImage: `linear-gradient(-50deg, ${producto.options[0].color}, #262626)`}} className='categoryRowCard col-2 m-4'>
                                                <img style={{width:producto.Clase==='Motos'? '200%' : '90%', marginTop:producto.Clase==='Motos'? '-50%' : '10%'}} src={producto.options[0].image} alt="" />
                                                <div style={{paddingBottom: '20%'}}>
                                                    <p>{producto.brand} {producto.model}</p>
                                                    <p>U$S {producto.price}</p>
                                                </div>
                                            </Link>
                                            )
                                        }
                                    })
                                }
            </div>
        )

    }

}

export default ClassStore