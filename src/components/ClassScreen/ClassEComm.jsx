import React from 'react'
import ClassEcommCard from './ClassEcommCard'

const ClassEComm = (props) => {
    const Datos = props.FilteredDatos
  return (
    <div id='Class-Ecomm'>
        {
            Datos.map(product =>{
                const producto = product
                return(
                    <ClassEcommCard producto={producto}/>
                    )            
                    })
        }
    </div>
  )
}

export default ClassEComm