import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import PCBenefitsCarousel from './PCBenefitsCarousel'

const PCBenefits = (props) => {
    const context = useContext(CartContext) 
    const producto = context.Datos.find(prod => prod.id===props.producto)

    if (producto) {
        return (
            <PCBenefitsCarousel items={producto.product.Benefits} />
          )
    
    }
    

}

export default PCBenefits