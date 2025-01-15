import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../../data/FirestoreData';

const ProductsTableItem = (props) => {
    const [Producto, setProducto] = useState(props.Producto)
    const [openOptions, setopenOptions] = useState(false)
    return(
        <div style={{display:'flex'}}>
            <p>{Producto.id}</p>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Title}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Brand}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Price}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Wallpaper}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.HotProducts}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Model}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Type}/>
            <input style={{width:'7vw', fontSize:'.5rem'}} type="text" value={Producto.product.Clase}/>
            <button onClick={()=>{setProducto(!openOptions)}}>Opciones</button>

        </div>    
    )
}

export default ProductsTableItem