import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ClassFilters = (props) => {
    const context = useContext(CartContext)
    const Productos = props.Productos
    const clase = Productos[0].product.Class
    const [openOrder, setopenOrder] = useState(false)
    
    return(
        <div id='ClassFilter' >
            <button onClick={()=>{setopenOrder(!openOrder)}}>
                Ordenar por
            </button>
        </div>
    )
    
}

export default ClassFilters