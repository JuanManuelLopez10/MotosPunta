import React from 'react'

const PhoneButtonsProduct = (props) => {
  return (
    <div id='PhoneButtonsProduct'>
        {
            props.producto.Clase==='Motos'
            ?
            <button onClick={()=>{props.HandleModal()}}  className='BotonesProductoWallpaper' id='BotonesProductoPhoneFinanciacion' ><i class="bi bi-whatsapp"></i>  Consulta financiación</button>
            :''
        }                                
        <button onClick={()=>{props.context.addToCart(props.producto, props.producto.options[props.seleccionado])}} className='BotonesProductoWallpaper' id={props.producto.Clase==='Motos' ? 'BotonesProductoPhoneCarrito' : 'BotonesProductoPhoneFinanciacion'} >Agregar al carrito</button>                                
    </div>
  )
}

export default PhoneButtonsProduct