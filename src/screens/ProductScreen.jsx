import React, { useContext, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import FirstView from '../components/Product/FirstView';
import Benefits from '../components/Product/Benefits';
import ProductOptions from '../components/Product/ProductOptions';
import ModalSelected from '../components/Product/ModalSelected';

const ProductScreen = () => {
    const context = useContext(CartContext)
    let producto 
    const productId = useLocation().pathname.split('/product/')[1]
    
    if (context.Datos[context.Datos.findIndex(product=>product.id===productId)]) {
      producto = context.Datos[context.Datos.findIndex(product=>product.id===productId)].product
    }
    const [SelectedOption, setSelectedOption] = useState(undefined)
    if (producto) {
      return(
        <div id='ProductScreen'>
          <FirstView setSelectedOption={setSelectedOption} SelectedOption={producto.Options[0]} producto={producto}/>
          <Benefits producto={producto}/>
          {
            producto.Options.length>1
            ?
            <ProductOptions setSelectedOption={setSelectedOption} producto={producto}/>    
            :''
          }
          {
            SelectedOption!==undefined
            ?<ModalSelected setSelectedOption={setSelectedOption} SelectedOption={SelectedOption} producto={producto}/>
            :''
          }
        </div>
      )
    }



}

export default ProductScreen