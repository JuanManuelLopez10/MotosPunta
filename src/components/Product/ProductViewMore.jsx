import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const ProductViewMore = (props) => {
    const context = useContext(CartContext)
    if (props.producto) {
        return (
            <div id='ProductViewMore'>
                <h2 style={{fontSize:context.fontPixel*2.3}}>{props.producto.product.Title.toUpperCase()}</h2>
                <h3 style={{fontSize:context.fontPixel*2}}>U$S {props.producto.product.Price}</h3>
            </div>
        );
    }

};

export default ProductViewMore;