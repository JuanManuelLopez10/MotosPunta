import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ProductViewMore = (props) => {
    const context = useContext(CartContext)
    if (props.producto) {
        return (
            <div id='ProductViewMore'>
                <h2 style={{fontSize:context.fontPixel*1.8}}>{props.producto.product.title.toUpperCase()}</h2>
                <h3 style={{fontSize:context.fontPixel*1.3}}>{props.producto.product.price}</h3>
            </div>
        );
    }

};

export default ProductViewMore;