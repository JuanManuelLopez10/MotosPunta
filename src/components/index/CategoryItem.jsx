import { Link } from "react-router-dom"
import React from 'react'
import 'animate.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCategory = ({item, fontPixel, handleSelectedCategory, CategorySelected}) => {
    const contxt = useContext(CartContext)
    console.log(contxt.Orientation);
    return (
        <button style={{
            backgroundImage: `url(${item.image})`,
            justifyContent: CategorySelected===item.title ? 'center' : 'center',
            height: contxt.Orientation==='Landscape' ? '25vw' : '30vh',
            width: contxt.Orientation==='Landscape' ? '25vw' : '50vw',
            }} 
            onClick={()=>{handleSelectedCategory(item.title)}} 
            className='itemCategory'>
            {
                CategorySelected===item.title
                ? <>
                <div className='animate__animated animate__fadeIn optionsDiv'>
                    {
                        item.options.map(element => {
                            return(
                            <Link className=" LinkCategoryIndex" style={{fontSize: contxt.Orientation==='Landscape' ? fontPixel/3.5 : fontPixel}} to={`/category/${element}`}>{element}</Link>
                            )
                        })
                    }
                </div>
                </>
                : <>
                <h4 className='animate__animated animate__fadeIn CategoryTitle' style={{fontSize: contxt.Orientation==='Landscape' ? fontPixel /1.5  : fontPixel * 1.5}}>{item.title}</h4>
                <div className='animate__animated animate__fadeOut optionsDiv'>
                </div>
                </>
            }
        </button>
      )
}


export default ItemCategory