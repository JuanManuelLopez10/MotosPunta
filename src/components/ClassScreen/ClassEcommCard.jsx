import React from 'react'
import { Link } from 'react-router-dom';

const ClassEcommCard = (props) => {
    console.log(props);
    
  return (
    <Link to={`/product/${props.producto.id}`} className='Class-Ecomm-Card' key={props.producto.product.Model}>
        <img src={props.producto.product.Options[0].Image} alt="" />
        <p>{props.producto.product.Brand} {props.producto.product.Model} {props.producto.product.Cilind} {props.producto.product.Design}</p>
        <p>{props.producto.product.Coin} {props.producto.product.Price}</p>
    </Link>
  )
}

export default ClassEcommCard