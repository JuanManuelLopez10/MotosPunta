import React, { useContext, useEffect, useState } from 'react'
import WallpaperIndex from '../components/index/WallpaperIndex'
import CategoriesIndex from '../components/index/CategoriesIndex'
import EspecialesIndex from '../components/index/EspecialesIndex'
import IndexWallpaperPC from '../components/index/IndexWallpaperPC'
import { CartContext } from '../context/CartContext'
import IndexHotProducts from '../components/index/IndexHotProducts'
import LoadingScreen from '../components/LOADING.JSX'


const Index = () => {
  const context = useContext(CartContext)

  

  return (
    <>
    <div id='Index'>
      <IndexWallpaperPC/>
      <IndexHotProducts/>
      {/* <WallpaperIndex/>
      <CategoriesIndex/>
      <EspecialesIndex/> */}
    </div>
    

    </>
    )

}

export default Index