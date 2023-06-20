import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const item = props.item
    return (
    <>
    <div className='Product-Card' style={{backgroundImage: `linear-gradient(217deg, ${item.options[0].color}, rgba(255,0,0,0) 70.71%), linear-gradient(127deg, ${item.options[0].color}, rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,0), ${item.options[0].secondaryColor} 70.71%)`, width: 90}}>
            <img src={item.options[0].image} alt="" />
            <p className='titulo-Card' >{item.model}</p>

    </div>

    </>  )
}

export default ProductCard