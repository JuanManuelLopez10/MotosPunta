import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const FirstView = (props) => {
    const context = useContext(CartContext)
    const [Opened, setOpened] = useState('Colours')
  return (
    <section id='ProductFirstView' >
        <div id='ProductFirstViewNameAndInfo'>
        <h1 style={{fontSize:context.fontPixel}} >{props.producto.Brand} {props.producto.Model}  {props.producto.Cilind}</h1>  
        {
            props.producto.Class!=='motos'
            ?
            <h3>{props.SelectedOption.Design} {props.SelectedOption.Color}</h3>
            :''
        }
            <h2 style={{fontSize:context.fontPixel*.5}} >{props.producto.Coin}{props.producto.Price}</h2>

        </div>
        <img className='Front' src={props.SelectedOption.Image}/>
        
        <img className='Back' src={props.SelectedOption.Image}/>
        <div id='ProductFirstViewDiv'>
            <button>Consultar disponibilidad</button>
            <button>Reservar {props.producto.Coin}{props.producto.Price/10}</button>
        </div>
    </section>
  )
}

export default FirstView