import React, { useContext, useCallback } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductOptions = (props) => {
    const context = useContext(CartContext);

    // Memorizar la función para evitar recreación en cada renderizado
    const handleOptionSelect = useCallback(
        (key) => {
            props.setOptionSelected(key);
            context.setSection('FirstView');
        },
        [props, context] // Dependencias, para que solo cambie si estas cambian
    );

    return (
        <div id='ProductOptions'>
            <h3>Opciones:</h3>
            <div id='ProductOptionsRow'>
                {
                    props.producto.product.Options.map((opcion, key) => (
                        <button 
                            onClick={() => handleOptionSelect(key)} 
                            className="ProductOption" 
                            key={opcion.id}
                        >
                            <img src={opcion.Image} alt="" />
                            <p> </p>
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductOptions;