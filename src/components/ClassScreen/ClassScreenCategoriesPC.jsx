import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ClassScreenCategoriesPC = () => {
    const { idClase } = useParams()
    const context = useContext(CartContext)
    const FilteredDatos = context.Datos.filter(datos => datos.product.Type === idClase)
    console.log(FilteredDatos);
    return (
    <div>ClassScreenCategoriesPC</div>
  )
}

export default ClassScreenCategoriesPC