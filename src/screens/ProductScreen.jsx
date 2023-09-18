import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import WallpaperProduct from '../components/Product/WallpaperProduct';
import ProductCaract from '../components/Product/ProductCaract';
import ModalCredito from '../components/ModalCredito';

const ProductScreen = () => {
    const { idProduct } = useParams();
    const context = useContext(CartContext)
    const [seleccionado, setSeleccionado] = useState(0)
    const [OpenCredit, setOpenCredit] = useState(false)

    const HandleModal = () => {
        if (OpenCredit===true) {
            setOpenCredit(false)
        }else{
            setOpenCredit(true)
        }
    }
    let product
    if (context.Datos) {
        context.Datos.map(item => {
            if (item.product.id === idProduct) {
                product = item.product
            }
        })
    }
    const seleccionar = (numero) => {
        setSeleccionado(numero)
        console.log(product.options[seleccionado]);
    }
    return(
      <div id='ProductScreen'>
        <WallpaperProduct HandleModal={HandleModal} seleccionar={seleccionar} producto={product}/>  
            <ProductCaract HandleModal={HandleModal} seleccionado={seleccionado} context={context} producto={product}/>
            {
                OpenCredit===true
                ?
                <ModalCredito MontoAFinanciar={product.price} HandleModal={HandleModal} />
                :
                ''
            }
      </div>
    )


}

export default ProductScreen