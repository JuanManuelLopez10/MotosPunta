import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const PCProductFirstView = (props) => {
    const context = useContext(CartContext)
    const producto = props.producto
    if (producto) {
      if (producto.product) {
        return (
          <div id='PCProductFirstView' >
            <div id='PCProductFirstViewText'>
              <p id="PCProductTextTitle" style={{fontSize:context.fontPixel*.5}}>{producto.product.title}</p>
              <p id="PCProductTextDescr">{producto.product.description}</p>
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
            <p id='PCProductBackTitle' style={{fontSize:context.fontPixel*6}}>{producto.product.model.toUpperCase()}</p>
            <img id='PCProductImage' src={producto.product.imageLink} alt="" />
            <div id='PCProductFirstViewCaract'>
              <p className="CaractTitle" style={{fontSize:context.fontPixel*.2}}>ESTILO</p>
              <p className="CaractDesc" style={{fontSize:context.fontPixel*.35}}>{producto.product.type.toUpperCase()}</p>
              <p className="CaractTitle" style={{fontSize:context.fontPixel*.2}}>COLOR</p>
              <p className="CaractDesc"  style={{fontSize:context.fontPixel*.35}}>{producto.product.color.toUpperCase()}</p>
              <p className="CaractTitle" style={{fontSize:context.fontPixel*.2}}>PRECIO</p>
              <p className="CaractDesc" style={{fontSize:context.fontPixel*.35}}>{producto.product.price}</p>
            </div>
          </div>
        )
  
      }
    }

}

export default PCProductFirstView