import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import EditArticulo from '../components/CreateArticle/EditArticulo'
import { useLocation } from 'react-router-dom'

const CreateArticle = () => {
    const contexto = useContext(CartContext)
    const location = useLocation().pathname.split("/")[1];
    useEffect(()=>{
        if (location==='atr') {
            contexto.setScreen('CrearProducto')
            
        }
    })
    const [producto, setproducto] = useState({})
    if (contexto.Screen==='CrearProducto') {
        return(
            <div>
                <h1 style={{marginTop:'10vh', marginBottom:'10vh'}}>Crear Articulo</h1>
                <input type="text" placeholder='Title' onChange={(e)=>{setproducto({...producto, Title:e.target.value})}}/>
                <input type="text" placeholder='Description'  onChange={(e)=>{setproducto({...producto, Description:e.target.value})}}/>
                <input type="text" placeholder='Imagen'  onChange={(e)=>{setproducto({...producto, Image:e.target.value})}}/>
                <input type="text" placeholder='Price'  onChange={(e)=>{setproducto({...producto, Price:e.target.value})}}/>
                <input type="text" placeholder='Brand'  onChange={(e)=>{setproducto({...producto, Brand:e.target.value})}}/>
                <input type="text" placeholder='item_group_id'  onChange={(e)=>{setproducto({...producto, id:e.target.value})}}/>
                <input type="text" placeholder='color'  onChange={(e)=>{setproducto({...producto, Color:e.target.value})}}/>
                <input type="text" placeholder='product_type'  onChange={(e)=>{setproducto({...producto, ProductType:e.target.value})}}/>
                <input type="text" placeholder='Model'  onChange={(e)=>{setproducto({...producto, Pattern:e.target.value})}}/>
                <input type="text" placeholder='Type'  onChange={(e)=>{setproducto({...producto, Type:e.target.value})}}/>
                <input type="text" placeholder='Pattern'  onChange={(e)=>{setproducto({...producto, Model:e.target.value})}}/>
                <input type="text" placeholder='Wallpaper' onChange={(e)=>{setproducto({...producto, Wallpaper:e.target.value})}} />
                <input type="text" placeholder='HotProduct' onChange={(e)=>{setproducto({...producto, HotProduct:e.target.value})}} />
                <button onClick={()=>{
                    contexto.addDato(producto)
                    }} >Agregar producto</button>
                </div>
        )
    
    }
}
export default CreateArticle


