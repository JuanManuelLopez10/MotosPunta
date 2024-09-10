import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ProductOptions from './ProductOptions';
import ProductBenefits from './ProductBenefits';

const ProductViewMore = (props) => {
    const context = useContext(CartContext);

    if (context.Section !== 'ProductViewMore') return null; // No renderizar si no es la sección correcta

    return (
        <div id='ProductViewMore'>
            {props.producto.product.Options.length > 1 && (
                <ProductOptions setOptionSelected={props.setOptionSelected} OptionSelected={props.OptionSelected} producto={props.producto} />
            )}
            <ProductBenefits setBenefitSelected={props.setBenefitSelected} producto={props.producto} />

        </div>
    );
};

export default ProductViewMore;