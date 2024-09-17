import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ClassOrderFor = (props) => {
    const context = useContext(CartContext)
    const [opened, setOpened] = useState(false)

    return(
        <div>
            <button className='FilterTitle' style={{fontSize:context.fontPixel*.32}} onClick={()=>{setOpened(opened===true?false:true)}}>{props.Array[0]}</button>
            {/* {
                opened===true && ( */}
                    <div className='FilterOptions'>
                        {
                            props.Array.map((item, index) => {
                                if (index>0) {
                                    return (
                                    <button key={index} onClick={()=>{
                                        props.accion(item)
                                        setOpened(false)
                                    }} style={{fontWeight:props.mainSelect===item?'700':'400'}} className={props.mainSelect===item?'OpcionMain':'Opcion'}>{props.mainSelect===item&&<span>{'>'}</span>}{item}</button>
                                )
                                }
                            })
                        }
                        <button onClick={()=>{props.accion(undefined)}}>Borrar filtro</button>
                    </div>
                {/* )
            } */}
        </div>
    )
}

export default ClassOrderFor