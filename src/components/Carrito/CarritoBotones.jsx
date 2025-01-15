import React, { useState } from 'react'

const CarritoBotones = (props) => {
  console.log(props.contexto.Carrito)
  const [HayMotos, setHayMotos] = useState(false)
  
  return (
    <div id='divTotalyBotones'>
    <h3 style={{ color: 'white', marginBottom:'5%'}}>Total: U$S {props.contexto.TotalCash}</h3>
    <div style={{ width: '100%', display: 'flex', flexDirection:props.contexto.Orientation==='Portrait' ? 'row' : 'column', justifyContent: 'space-around', alignItems: 'center' }}>
    {
      props.contexto.Carrito.find(item=>item.Clase==='Motos')
      ?
      <button onClick={()=>{props.HandleModal()}} className='BotonesProductoWallpaper' id='BotonesProductoWallpaperWp' >Consulta financiación</button>
      :
      ''
    }
        <button  className='BotonesProductoWallpaper' id='BotonesProductoWallpaperCarrito' >Agregar al carrito</button>
    </div>
    </div>
  )
}

export default CarritoBotones