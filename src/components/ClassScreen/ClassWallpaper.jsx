import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useLocation } from 'react-router-dom';

const ClassWallpaper = ({FilteredDatos, idClase}) => {
    const context = useContext(CartContext)
    const location = useLocation();

    useEffect(() => {
        setSelected(FilteredDatos[0])
    }, [location]);

        // const seleccionarnuevo = () => {
        //     setSelected(FilteredDatos[0])
        // } 
    const [Selected, setSelected] = useState(FilteredDatos[0])
    const ToNextHotProduct = (product) => {
        const inde = FilteredDatos.findIndex(p => p===product)
        if(inde===FilteredDatos.length-1){
            const next = FilteredDatos[0]
            setSelected(next)
        
        }else{
            const next = FilteredDatos[inde+1]
            setSelected(next)
        }
}
    const ToPreviousHotProduct = (product) => {
        const inde = FilteredDatos.findIndex(p => p===product)
        if (inde===0) {
            const next = FilteredDatos[FilteredDatos.length-1]
            setSelected(next)
        
        }else{
            const next = FilteredDatos[inde-1]
            setSelected(next)    
        }
    }
    if(Selected){
        return (
            <section id='ClassWallpaper' >
                    <h2 style={{fontSize: context.fontPixel*5}} >{idClase.toUpperCase()}</h2>
                    <div id='imgContainer'>
                        <img style={{height:'90%'}} src={Selected.product.Options[0].Image} alt="" />
                    </div>
                <div id=''>

                </div>
            </section>
          )
    }
}

export default ClassWallpaper