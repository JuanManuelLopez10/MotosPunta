import React, { useContext, useMemo } from 'react';
import { CartContext } from '../../context/CartContext';

const ProductFirstView = (props) => {
    const context = useContext(CartContext);
    const producto = props.producto

    const viewMore = () => {
        context.setSection('ProductViewMore');
        context.setPresection('FirstView');
    };
    console.log(props.producto);
    
    if (!producto?.product) return null; // Retornar null si no se encuentra el producto

    const optionIndex = producto.product.Options.length > props.OptionSelected ? props.OptionSelected : 0;
    const productImage = producto.product.Options[optionIndex].Image;

    const renderProductContent = () => (
        <>
            <img id={producto.product.Class === 'motos' ? 'ProductScreenIMGMoto' : 'ProductScreenIMGOtros'} src={productImage} alt="" />
            <p id='ProductScreenBrand' style={{ fontSize: context.fontPixel * 6 }}>{producto.product.Brand.toUpperCase()}</p>
            <p id='ProductScreenBrand2' style={{ fontSize: context.fontPixel * 6 }}>{producto.product.Brand.toUpperCase()}</p>
            <p id="ProductScreenModel" style={{ fontSize: context.fontPixel * 7 }}>{producto.product.Pattern.toUpperCase()}</p>
            <div id="ProductScreenPrice" style={{ fontSize: context.fontPixel * 2 }}>
                <p>{producto.product.Title}</p>
                <p>{producto.product.Coin} {producto.product.Price}</p>
            </div>
            <div id="ProductScreenGradient">
                <button id="ProductScreenViewMore" onClick={viewMore} style={{ fontSize: context.fontPixel * 1.2 }}>Ver más</button>
            </div>
        </>
    );

    return (
        <div id={context.Screen === 'Product' || context.Screen === 'Clase' ? 'ProductScreen' : 'ProductScreenClosed'}>
            {renderProductContent()}
        </div>
    );
};

export default ProductFirstView;