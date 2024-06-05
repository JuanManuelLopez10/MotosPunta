import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import WallpaperIndex from '../components/index/WallpaperIndex'
import HotProducts from '../components/index/HotProducts'
import Brands from '../components/index/Brands'
import WhiteBack from '../components/index/WhiteBack'
import { useLocation } from 'react-router-dom'


const Index = (props) => {
  const context = useContext(CartContext)
  const location = useLocation().pathname.split("/clase/")[1];
  const productId = useLocation().pathname.split('/product/')[1]
  console.log('Location: ' + location);
  if(location!==undefined){
    context.setScreen('Clase')
  }else if(productId!==undefined){
  context.setScreen('Product')
  context.setSection('FirstView')
}  
  return (
    <>
    <div id='Index'>
    <WallpaperIndex/>
    <WhiteBack/>
    <HotProducts/>  
    <Brands/>
      {/* <IndexWallpaperPC/>
      <IndexHotProducts/> */}

    </div>
    

    </>
    )

}

export default Index