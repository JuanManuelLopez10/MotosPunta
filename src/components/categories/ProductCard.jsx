import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    const item = props.item
    return (
    <>
    <div className='Product'>
        <Link to={`/product/${item.id}`} className='Product-Card'>
        <img src={item.options[0].image} alt="" style={{width: item.Clase==='Motos' ? '140%' : '80%', marginRight: '0%',  alignSelf:  item.Clase==='Motos' ? 'flex-end' : 'center', marginBottom:  item.Clase==='Motos' ? '0' : '10%'}}/>
            <p className='titulo-Card' >{item.model}</p>
            <p className='titulo-Price' >U$S {item.price}</p>
        </Link>    

    </div>

    </>  )
}

export default ProductCard