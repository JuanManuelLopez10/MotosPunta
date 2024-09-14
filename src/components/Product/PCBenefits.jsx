import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import PCBenefitsCarousel from './PCBenefitsCarousel'

const PCBenefits = (props) => {
    const context = useContext(CartContext) 
    const producto = props.producto

    if (producto) {
        if (producto.product) {     
        return (
            <PCBenefitsCarousel items={producto.product.Benefits} />
          )
       
        }
    }
    

}

export default PCBenefits