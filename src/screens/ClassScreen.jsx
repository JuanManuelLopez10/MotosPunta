import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../data/FirestoreData';
import ClassCategories from '../components/ClassScreen/ClassCategories';
import ClassMainCategory from '../components/ClassScreen/ClassMainCategory';
import ClassStore from '../components/ClassScreen/ClassStore';
import { CartContext } from '../context/CartContext';
import ClassScreenCategoriesPC from '../components/ClassScreen/ClassScreenCategoriesPC';
import ClassWallpaper from '../components/ClassScreen/ClassWallpaper';
import ClassBrands from '../components/ClassScreen/ClassBrands';
import ClassEComm from '../components/ClassScreen/ClassEComm';
// import CategoryRow from '../components/categories/categoryRow';

const ClassScreen = () => {
  const { idClase } = useParams()
  const context = useContext(CartContext)
  const FilteredDatos = context.Datos.filter(datos => datos.product.Type === idClase)
      
  
  
      return (
    <>
    <div id='Clase'>
    <ClassWallpaper FilteredDatos={FilteredDatos} idClase={idClase}/>
    <ClassBrands FilteredDatos={FilteredDatos}/>
    <ClassEComm FilteredDatos={FilteredDatos}/>
    </div>
    </>
  )
}

export default ClassScreen