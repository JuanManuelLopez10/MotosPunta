import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const PCColors = (props) => {
    const context = useContext(CartContext) 
    const producto = context.Datos.find(prod => prod.id===props.producto)
    if (producto) {
        if (producto.product) {
            return (
                <div id="PCColors">
                        <h3 style={{fontSize:context.fontPixel*4.5}} id="ColorsTitleBack">COLORES</h3>
                    <div id="ColoresOptions">
                        {
                            producto.product.Options.map((item, index)=>{
                                return (
                                    <>
                                    <img key={'coso'+index} style={{width:producto.product.Class==='motos'?'40vw':'25vw'}} src={item.Image}  alt="" />
                                    <p>{item.Model} {item.Color}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            )  
    
        }
    }



}

export default PCColors