import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const FirstView = (props) => {
    const context = useContext(CartContext)
    const [Opened, setOpened] = useState(undefined)

  return (
    <section id='ProductFirstView' >
        <div id='ProductFirstViewNameAndInfo'>
        <h1 style={{fontSize:context.fontPixel}} >{props.producto.Brand} {props.producto.Model}  {props.producto.Cilind}</h1>  
            <h2 style={{fontSize:context.fontPixel*.5}} >{props.producto.Coin}{props.producto.Price}</h2>
        </div>
        <button id='ViewDisponibility' onClick={()=>{props.producto.Options.length>1 ?console.log('hola') :props.setSelectedOption(props.producto.Options[0])}}>
          Ver disponibilidad
        </button>
        <img className='Front' src={props.SelectedOption.Image}/>
        
        <img className='Back' src={props.SelectedOption.Image}/>

    </section>
  )
}

export default FirstView