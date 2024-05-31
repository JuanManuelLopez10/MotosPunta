import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductBenefits = (props) => {
    const context = useContext(CartContext)
        return (
            <section id="ProductBenefits">
                <h3>CARACTERISTICAS</h3>
                <div id="ProductBenefitsRow">
                {
                    props.producto.product.Benefits.map(beneficio => {
                        return(
                            <div style={{backgroundImage:`url(${beneficio.Image})`}} className="ProductBenefit" key={beneficio.id}>
                                    <p style={{fontSize: context.fontPixel*1.4}} >{beneficio.Title}</p>
                            </div>
                        )
                    })
                }
                </div>
            </section>
        )

}

export default ProductBenefits