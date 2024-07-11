import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';
import ClassFilters from '../components/ClassScreen/ClassFilters';

const ClassScreen = () => {
  const context = useContext(CartContext)
  const location = useLocation().pathname.split("/clase/")[1];
  const productId = useLocation().pathname.split('/product/')[1]
  const [ClaseSelected, setClaseSelected] = useState('Naked') 
  const ArrayOfMotosTypes = ['Naked', 'Sport', 'Scooter', 'Polleritas', 'Calle', 'Multiprop.', ]
  if (ClaseSelected!==location) {
    setClaseSelected(location)
  }

  
  if (productId!==undefined) {
  }
  if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {

  if (context.Screen==='Clase') {
    return (
      <>
      <div onLoad={()=>{
        setClaseSelected(location)
      }} id='Clase'>
        <h2>{location}</h2>
        <ClassProducts productId={productId} Clase={location ? location : ClaseSelected} />
        {/* <ClassWallpaper FilteredDatos={FilteredDatos} idClase={idClase}/>
        <ClassBrands FilteredDatos={FilteredDatos}/>
        <ClassEComm FilteredDatos={FilteredDatos}/> */}
      </div>
      </>
    )
  }else{
    return(
    <div id='ClaseClosed'>
        <h2>{ClaseSelected}</h2>
        <ClassProducts Clase={ClaseSelected} />
    </div>)
  }
  }else{
    if (context.Screen==='Clase') {
      return(
        <div id="ClassScreen">
          <ClassFilters ArrayOfMotosTypes={ArrayOfMotosTypes} Clase={ClaseSelected} />
          <ClassProducts Clase={ClaseSelected}/>
        </div>
      )
    }else{
      return(
        <div id="ClassScreenHidden">
          <ClassFilters ArrayOfMotosTypes={ArrayOfMotosTypes} Clase={ClaseSelected} />
          <ClassProducts Clase={ClaseSelected}/>
        </div>
      )
    }

  }

}

export default ClassScreen