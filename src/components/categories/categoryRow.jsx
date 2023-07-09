import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const CategoryRow = (props) => {
    const products = props.datos.filter(item=>item.brand===props.title)
    let existencia = false
    products.map(item=>{
        if (item.category===props.SelectedCategory) {
            existencia=true
        }
    })
    return (
    <div>
        {
                props.SelectedCategory===''
                
                ?
                <>
                <h3 className='rowTitle'>{props.title}</h3>
                <div className='categoryRow'>
                {
                                    props.datos.map(item=>{
                                        if(item.brand===props.title){
                                            return(
                                                <ProductCard item={item} />
                                            )
                                        }
                                    })                    
                }
                            </div>
                </>


                : 
                <>
                {
                    existencia===true
                    ?                
                    <>
                    <h3 className='rowTitle'>{props.title}</h3>
                    <div className='categoryRow'>
                    {
                                        props.datos.map(item=>{
                                            if(item.brand===props.title && item.category===props.SelectedCategory){
                                                return(
                                                    <ProductCard item={item} />
                                                )
                                            }
                                        })                    
                    }
                                </div>
                    </>
                    : ''
                }
                </>
        
        }
            </div>
  )
}

export default CategoryRow