import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CarritoProductos from '../components/Carrito/CarritoProductos'
import CarritoBotones from '../components/Carrito/CarritoBotones'

const Carrito = () => {
    const contexto = useContext(CartContext)
    const [OpenCredit, setOpenCredit] = useState(false)

    const deleteProduct = (pro) => {
        contexto.restarPrecio(pro)
        contexto.removeFromCart(pro)
    }
    const HandleModal = () => {
        if (OpenCredit===true) {
            setOpenCredit(false)
        }else{
            setOpenCredit(true)
        }
    }

    return (
        <div id='Carrito'>
            <div >
                <h1 style={{ color: 'white' }}>Tu Carrito</h1>
                <h6 style={{ color: 'grey' }}>{contexto.Carrito.length} productos seleccionados</h6>
            </div>
            <CarritoProductos contexto={contexto} deleteProduct={deleteProduct} />
            <CarritoBotones  HandleModal={HandleModal} contexto={contexto} />
            </div>
            )
    }

export default Carrito