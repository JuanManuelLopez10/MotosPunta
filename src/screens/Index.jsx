import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import WallpaperIndex from '../components/index/WallpaperIndex'
import HotProducts from '../components/index/HotProducts'
import Brands from '../components/index/Brands'
import WhiteBack from '../components/index/WhiteBack'


const Index = (props) => {
  const context = useContext(CartContext)

  
  
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