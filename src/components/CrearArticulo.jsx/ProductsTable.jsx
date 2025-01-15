import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../../data/FirestoreData';
import ProductsTableItem from './ProductsTableItem';

const ProductsTable = (props) => {
    const [Productos, setProductos] = useState([])
    
    const GetProductos = async () => {
        const MotosCollection = collection(db, 'Productos');
        const motosSnapshot = await getDocs(MotosCollection);
        const DAATos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}));
        setProductos(DAATos)    
        console.log(DAATos[0]);
    }
    useEffect(()=>{
        GetProductos()
    },[])
    return(
        <>
        <h2>{props.productos[0].product.Title}</h2>
        {
            props.productos.map((item, index) => {
                return(
                    <ProductsTableItem Producto={item}/>
                )
        })
        }
        </>
        )
        
        
}

export default ProductsTable