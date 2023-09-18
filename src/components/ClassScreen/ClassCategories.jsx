import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ClassCategories = (props) => {
    const context = useContext(CartContext)
  return (
    <div className='CategoriasClase'>
    <h3 className='CategoriasClaseTitulo' >Categorías</h3>
    <div className='CategoriasClaseRow'>
      {
        props.Categorias.map(category=>{
          let articulo
          props.datos.map(arti=>{
            if (arti.category===category && articulo===undefined) {
              articulo=arti
            }
          })
          return(
            <div key={category} className='col-4 col-lg-1 h-100 p-0 d-flex ml-3'>
              <button onClick={()=>{context.changeCategory(category)}} className='CategoriasClasecat'>
                <img style={{width:articulo.clase==='Motos' ? '90%' : '70%', marginTop: articulo.clase==='Motos' ? '0%' : '5%'}} src={articulo.options[0].image} alt="" />
                <p>{category}</p>
              </button>
            </div>
          )
        })
      }
    </div>
  </div>  
  )
}

export default ClassCategories