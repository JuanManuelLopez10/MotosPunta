import React, { useContext, useEffect, useState } from 'react'
import { CATEGORIES } from '../../data/Cat'
import ItemCategory from './CategoryItem';
import { CartContext } from '../../context/CartContext';

const Categories = () => {
    const categories = CATEGORIES
    console.log(categories[0]);
    const {fontPixel} = useContext(CartContext)
    const [CategorySelected, setCategorySelected] = useState('')
    const handleSelectedCategory = (cat) => {
        setCategorySelected(cat)
    }

  return (
    <>
    <div className='IndexCategories'>
    {
            categories.map(item => <ItemCategory item={item} handleSelectedCategory={handleSelectedCategory} CategorySelected={CategorySelected} fontPixel={fontPixel}/>)
    }
    </div>

    </>
  )
}

export default Categories