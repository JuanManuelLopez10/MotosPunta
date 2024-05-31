import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';

const ClassScreen = () => {
  const context = useContext(CartContext)
  const location = useLocation().pathname.split("/clase/")[1];
  const productId = useLocation().pathname.split('/product/')[1]
  const [ClaseSelected, setClaseSelected] = useState('Naked') 
  useEffect(()=>{
    setClaseSelected(location)

    },[])
  if (productId!==undefined) {
    console.log(productId);
  }

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


}

export default ClassScreen