import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import MenuHeader from './MenuHeader'
import MenuOption from './MenuOption'

const Menu = () => {
    const context = useContext(CartContext)
    
    const opciones = ['Inicio', 'Motos', 'Cascos', 'Indumentaria', 'Accesorios', 'Carrito', 'Solicitar crédito', 'Contacto']
    
    if (context.Orientation==='Landscape') {

        return(
        <div className='PortraitMenu' >
        <MenuHeader/>
        {
            opciones.map(item=>(
                <MenuOption opcion={item} key={item}/>
            ))
        }
    </div>
    )

    }else{

            return (
                <div className='PortraitMenu' >
                    <MenuHeader/>
                    {
                        opciones.map(item=>(
                            <MenuOption key={item} opcion={item} />
                        ))
                    }
                </div>
              )

    }


}

export default Menu