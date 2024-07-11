import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const PCProductFirstView = (props) => {
    const context = useContext(CartContext)
    const producto = context.Datos.find(prod => prod.id===props.producto)
    if (producto) {
      return (
        <div id='PCProductFirstView' >
          <div id='PCProductFirstViewText'>
            <p id="PCProductTextTitle" style={{fontSize:context.fontPixel*.5}}>{producto.product.Title}</p>
            <p id="PCProductTextDescr">{producto.product.Description}</p>
            {/* <div>
              {
                producto.product.Options.map((opcion, index) => {
                  return (
                    <button onClick={()=>{props.setOptionSelected(index)}} className="PCProdColorOption">

                    </button>
                  )
                })
              }
            </div> */}
          </div>
          <p id='PCProductBackTitle' style={{fontSize:context.fontPixel*6}}>{producto.product.Model.toUpperCase()}</p>
          <img id='PCProductImage' src={producto.product.Options[props.OptionSelected].Image} alt="" />
          <div id='PCProductFirstViewCaract'>
            <p className="CaractTitle" style={{fontSize:context.fontPixel*.2}}>ESTILO</p>
            <p className="CaractDesc" style={{fontSize:context.fontPixel*.35}}>{producto.product.Type.toUpperCase()}</p>
            <p className="CaractTitle" style={{fontSize:context.fontPixel*.2}}>COLOR</p>
            <p className="CaractDesc"  style={{fontSize:context.fontPixel*.35}}>{producto.product.Options[props.OptionSelected].Color.toUpperCase()}</p>
            <p className="CaractTitle" style={{fontSize:context.fontPixel*.2}}>PRECIO</p>
            <p className="CaractDesc" style={{fontSize:context.fontPixel*.35}}>{producto.product.Price} USD</p>
          </div>
        </div>
      )
    }

}

export default PCProductFirstView