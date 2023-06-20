import React from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryRow = (props) => {
    console.log(props.title);
    return (
    <div>
        <h3 className='rowTitle'>{props.title}</h3>
        <div className='categoryRow'>

            {
                props.datos.map(item=>{
                    if(item.category===props.title){
                        console.log(item.model + ':  ' + item);
                        console.log(item);
                        return(
                            <ProductCard item={item} />
                        )
                    }
                })
            }
            </div>
    </div>
  )
}

export default CategoryRow