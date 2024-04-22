import React from 'react'
import { Link } from 'react-router-dom'

const TypesMenu = (props) => {
    console.log(props.Selected);
    return (
        <div id='TypesMenu'>
            {
                props.arrayTypes.map(tipo=>{
                    if (tipo.Class===props.Selected) {
                        return (
                            <Link className='TipoMenu animate__animated animate__fadeInDown' onClick={()=>{props.handleCloseMenu()}} to={`/clase/${tipo.nombre}`} key={tipo.id}>
                                
                                <img src={tipo.image} alt=""/>
                                <h3>{tipo.nombre}</h3>
                            
                            </Link>
                        )     
                    }

                })
            }
        </div>
    )
}

export default TypesMenu