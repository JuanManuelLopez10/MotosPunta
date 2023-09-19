import React, { useContext, useEffect, useState } from 'react'
import WallpaperIndex from '../components/index/WallpaperIndex'
import CategoriesIndex from '../components/index/CategoriesIndex'
import EspecialesIndex from '../components/index/EspecialesIndex'


const Index = () => {
  const [Ready, setReady] = useState(false)
  const estaready = () => {
    setReady(true)
  }
  

  return (
    <>
    <div id='Index'>
      <WallpaperIndex/>
      <CategoriesIndex/>
      <EspecialesIndex/>
    </div>
    

    </>
    )
}

export default Index