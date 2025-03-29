import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import { useLocation } from 'react-router-dom'
import ProductsTable from '../components/CrearArticulo.jsx/ProductsTable'

const CreateArticle = (props) => {
    const contexto = useContext(CartContext)
    const location = useLocation().pathname.split("/")[1];

    useEffect(()=>{
        if (location==='atr') {
            contexto.setScreen('CrearProducto')
            contexto.setSection('CrearProducto')
        }

    },[])

    if (contexto.Screen==='CrearProducto' && props.articulos[0]) {
        console.log(props.articulos[0]);
        
        return(
            <>

                    <ProductsTable productos={props.articulos}/>
                </>
        )
    
    }
}
export default CreateArticle


