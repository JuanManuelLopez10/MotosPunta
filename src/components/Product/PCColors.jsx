import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FetchFromFirestore } from '../../data/FetchFromTXT'
import { useState } from 'react'

const PCColors = (props) => {
    const context = useContext(CartContext) 
    const producto = props.producto
    const [colores, setColores] = useState([])
      const fetchProducts = async () => {
        const productos = await FetchFromFirestore()
        setColores(productos)
      }

    // const colorOptions = products.filter(prod => prod.preid === producto.id)

    if (colores[0] && producto) {
        if (producto.product) {
            const arrayOfOptions = colores.filter(prod=>prod.product.title===producto.product.title)
            return (
                <div id="PCColors">
                        <h3 style={{fontSize:context.fontPixel*4.5}} id="ColorsTitleBack">COLORES</h3>
                    <div id="ColoresOptions">
                        {
                            arrayOfOptions.map((item, index)=>{
                                return (
                                    <>
                                    <img key={'coso'+index} style={{width:producto.product.class==='motos'?'40vw':'25vw'}} src={item.product.imageLink}  alt="" />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            )  
    
        }
    }else{
        fetchProducts()
    }



}

export default PCColors