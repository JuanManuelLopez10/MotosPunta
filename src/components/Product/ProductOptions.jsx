import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const ProductOptions = (props) => {
    const context = useContext(CartContext) 
        return (
            <div id='ProductOptions'>
                <h3>Opciones:</h3>
                <div id='ProductOptionsRow'>
                {
                    props.producto.product.Options.map((opcion, key) => {
                        return(
                            <button onClick={()=>{props.setOptionSelected(key)
                                context.setSection('FirstView')
                            }} className="ProductOption" key={opcion.id}>
                                <img src={opcion.Image} alt="" />
                                <p> </p>
                            </button>
                        )
                    })
                }                

                </div>
            </div>
          )


}

export default ProductOptions