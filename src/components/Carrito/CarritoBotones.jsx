import React, { useState } from 'react'

const CarritoBotones = (props) => {
  console.log(props.contexto.Carrito)
  const [HayMotos, setHayMotos] = useState(false)
  let probar
  const armarTexto = () => {
    props.contexto.Carrito.map(item=>{
      if (probar===undefined && props.contexto.Carrito.indexOf(item)===0) {
        probar= `Estoy%20interesado/a%20en%20financiar%20${item.Clase==='Motos' ? 'una' : 'un'}%20${item.brand}%20${item.model}%20${item.Clase==='Cascos' ? item.design : ''}`
      }else if(props.contexto.Carrito.indexOf(item)+1===props.contexto.Carrito.length){
        probar= probar + `%20y%20${item.Clase==='Motos' ? 'una' : 'un'}%20${item.brand}%20${item.model}%20${item.Clase==='Cascos' ? item.design : ''}`
      }else{
        probar= probar + `%2C%20${item.Clase==='Motos' ? 'una' : 'un'}%20${item.brand}%20${item.model}%20${item.Clase==='Cascos' ? item.design : ''}`
      }
    })
  } 
  armarTexto()
  return (
    <div id='divTotalyBotones'>
    <h3 style={{ color: 'white', marginBottom:'5%'}}>Total: U$S {props.contexto.TotalCash}</h3>
    <div style={{ width: '100%'}}>
    {
      props.contexto.Carrito.find(item=>item.Clase==='Motos')
      ?
      <a href={`https://api.whatsapp.com/send?phone=59899673830&text=${probar}`} target='blank' style={{color: 'white', display:'flex', justifyContent: 'center'}} className='BotonesProductoWallpaper' id='BotonesProductoWallpaperWp' > <i class="bi bi-whatsapp"></i> Consulta financiación</a>
      :
      ''
    }
        <button  className='BotonesProductoWallpaper' id='BotonesProductoWallpaperCarrito' >Agregar al carrito</button>
    </div>
    </div>
  )
}

export default CarritoBotones