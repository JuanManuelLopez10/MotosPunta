import React, { useContext, useEffect, useState } from 'react'
import { CATEGORIES } from '../../data/Cat'
import ItemCategory from './CategoryItem';
import { CartContext } from '../../context/CartContext';

const Categories = () => {
    const categories = CATEGORIES
    const {fontPixel} = useContext(CartContext)
    const [CategorySelected, setCategorySelected] = useState('')
    const handleSelectedCategory = (cat) => {
        setCategorySelected(cat)
    }
    
  return (
    <>
    <section className='IndexCategories'>
      <div style={{height: '100%', display:'flex'}} >
      {
            categories.map(item => <ItemCategory item={item} handleSelectedCategory={handleSelectedCategory} CategorySelected={CategorySelected} fontPixel={fontPixel}/>)
    }
      </div>

    </section>

    </>
  )
}

export default Categories