import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import PCBenefitsCarousel from './PCBenefitsCarousel'

const PCColors = (props) => {
    const context = useContext(CartContext) 
    const producto = context.Datos.find(prod => prod.id===props.producto)
    if (producto) {
        console.log(producto.product);
        return (
            <div id="PCColors">
                    <h3 style={{fontSize:context.fontPixel*4.5}} id="ColorsTitleBack">COLORES</h3>
                <div id="ColoresOptions">
                    {
                        producto.product.Options.map((item, index)=>{
                            return (
                                <img style={{width:producto.product.Class==='motos'?'40vw':'25vw'}} src={item.Image}  alt="" />
                            )
                        })
                    }
                </div>
            </div>
        )  
    }



}

export default PCColors