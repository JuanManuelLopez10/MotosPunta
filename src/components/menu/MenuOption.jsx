import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const MenuOption = (props) => {
    
    const context = useContext(CartContext)
    
    let whatIs 
    if (props.opcion==='Motos' || props.opcion==='Cascos' || props.opcion==='Indumentaria' || props.opcion==='Accesorios'){
        whatIs= '/clase/' + props.opcion
    }else if (props.opcion==='Inicio'){
        whatIs='/'
    }else{
        whatIs= '/'+props.opcion
    }
    if (context.fontPixel!==NaN) {
        return (
            <Link to={whatIs} onClick={()=>{
                context.changeScreen(props.opcion)
            }} className={context.currentScreen===props.opcion ? 'MenuOptionSelected' : 'MenuOption'} >
                <div>
                    <p style={{fontSize: context.Orientation==='Portrait' ? context.fontPixel*1.2 : context.fontPixel * .3}}>{props.opcion}</p>
                </div>
            </Link>
          )
    }

}

export default MenuOption