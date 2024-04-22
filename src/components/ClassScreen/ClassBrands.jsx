import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ClassBrands = (props) => {
    const context = useContext(CartContext)
    const brands = []
    props.FilteredDatos.map(product => {
        if (brands.includes(product.product.Brand)) {
            // brands.push(product.product)
        }else{
            brands.push(product.product.Brand)
        }
    })
    console.log(brands);
  return (
    <div id='ClassBrands'>
        {
            brands.map(brand => {
                return (
                    <div key={brand} >
                        <img src={`/assets/logos/${brand}.png`} alt="" />
                    </div>
                )
            })
        }
    </div>
    )
}

export default ClassBrands