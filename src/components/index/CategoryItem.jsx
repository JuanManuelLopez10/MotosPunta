import { Link, Route } from "react-router-dom"
import React from 'react'
import 'animate.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCategory = ({item, fontPixel, handleSelectedCategory, CategorySelected}) => {
    const contxt = useContext(CartContext)
    return (
        
        <button className="CategoryItem" style={{backgroundImage: `url(${item.image})`}}>
            <Link to={`/clase/${item.title}`}>
            <div className="CategoryTitleDiv">
                <p style={{fontSize: contxt.Orientation==='Landscape' ? fontPixel*.4 : fontPixel}} >{item.title}</p>
            </div>
            </Link>
        </button>
        )
}


export default ItemCategory