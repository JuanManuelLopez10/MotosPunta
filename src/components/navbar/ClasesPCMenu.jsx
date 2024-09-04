import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ClasesPCMenu = (props) => {
    const context = useContext(CartContext)
    const ArrayOfOptions = []
    context.Datos.map(producto => {
        if (producto.product) {
            if (producto.product.Class===props.SelectedOpcion && ArrayOfOptions.find(opcion => opcion===producto.product.Type)===undefined) {
                ArrayOfOptions.push(producto.product.Type)
            }
        }

    })
    return (
    <div id='ClasesPCMenu' >
        {
            ArrayOfOptions.map((opcion, index) => {
                return (
                    <Link to={`/clase/${opcion}`} onClick={()=>{
                        props.setSelectedOpcion(undefined)
                        context.setScreen('Clase')
                    }} className='Opciooon' key={index} style={{fontSize:context.fontPixel*.3}}>{opcion.toUpperCase()}</Link>
                )
            })
        }
    </div>
  )
}

export default ClasesPCMenu