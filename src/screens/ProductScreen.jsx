import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import FirstView from '../components/Product/FirstView';

const ProductScreen = () => {
    const { idProduct } = useParams();
    const context = useContext(CartContext)
    const producto = context.Datos[context.Datos.findIndex(product=>product.id===idProduct)].product
    const [SelectedOption, setSelectedOption] = useState(producto.Options[0])
    return(
      <div id='ProductScreen'>
        <FirstView setSelectedOption={setSelectedOption} SelectedOption={SelectedOption} producto={producto}/>
      </div>
    )


}

export default ProductScreen