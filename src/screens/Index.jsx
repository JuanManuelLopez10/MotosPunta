import React, { useContext, useEffect } from 'react'
import WallpaperIndex from '../components/index/WallpaperIndex'
import CategoriesIndex from '../components/index/CategoriesIndex'
import EspecialesIndex from '../components/index/EspecialesIndex'
import IndexWallpaperPC from '../components/index/IndexWallpaperPC'
import { CartContext } from '../context/CartContext'
import IndexHotProducts from '../components/index/IndexHotProducts'


const Index = () => {
  const context = useContext(CartContext)
  console.log(context.ImageStorage);
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