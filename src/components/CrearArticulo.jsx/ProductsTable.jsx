import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import db from '../../data/FirestoreData';
import ProductsTableItem from './ProductsTableItem';

const ProductsTable = (props) => {
    const uniqueTitles = [...new Set(props.productos.map(item => item.product.title))].sort();
    return(
        <>
        <h2>{props.productos[0].product.Title}</h2>
        <div style={{width:"100vw", display:"flex", flexDirection:"column", }}>
        {
            uniqueTitles.map((item, index) => {
                return(
                    <button key={index}>{item}</button>
                )
            })
        }
        </div>

        {/* {
            props.productos.map((item, index) => {
                return(
                    <ProductsTableItem Producto={item}/>
                )
        })
        } */}
        </>
        )
        
        
}

export default ProductsTable