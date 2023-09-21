import React from 'react'

const PhoneButtonsProduct = (props) => {
  return (
    <div id='PhoneButtonsProduct'>
        {
            props.producto.Clase==='Motos'
            ?
            <a href={`https://api.whatsapp.com/send?phone=59899673830&text=Estoy%20interesado/a%20en%20financiar%20una%20${props.producto.brand}%20${props.producto.model}`} target="_blank" className='BotonesProductoWallpaper' id='BotonesProductoPhoneFinanciacion' ><i class="bi bi-whatsapp"></i>  Consulta financiación</a>
            :''
        }                                
        <button onClick={()=>{props.context.addToCart(props.producto, props.producto.options[props.seleccionado])}} className='BotonesProductoWallpaper' id={props.producto.Clase==='Motos' ? 'BotonesProductoPhoneCarrito' : 'BotonesProductoPhoneFinanciacion'} >Agregar al carrito</button>                                
    </div>
  )
}

export default PhoneButtonsProduct