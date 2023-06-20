import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import CrearArticulo from './screens/CrearArticulo';
import ClassScreen from './screens/ClassScreen';

const Ap = () => {
    const { handleOrientation, handleFontPixel, handleMode } = useContext(CartContext)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const mediaQuera = window.matchMedia("(prefers-color-scheme: dark)")

    const getDarkorLightMode = () => {
      const mediaQuer = window.matchMedia("(prefers-color-scheme: dark)")
      const isDark = mediaQuer.matches
      const Mode = isDark ? 'Dark' : 'Light'
      handleMode(Mode)
    }
    getDarkorLightMode()
    mediaQuera.addEventListener('change', getDarkorLightMode)
    function getCurrentOrientation() {
      const mediaQuery = window.matchMedia("(orientation: portrait)");
      const isPortrait = mediaQuery.matches;
      const widthscreen = window.innerWidth
      const heigthscreen = window.innerHeight

      if (isPortrait) {
        handleOrientation('Portrait', widthscreen, heigthscreen)
      } else {
        handleOrientation('Landscape', widthscreen, heigthscreen)
      }
      handleFontPixel(widthscreen)
    }  
    getCurrentOrientation()
    window.addEventListener("resize", getCurrentOrientation);
  

    
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/clase/:idClase' element={<ClassScreen/>}/>
      <Route path='/atr' element={<CrearArticulo/>}/>
      <Route path='/product/:idProduct' element={<CrearArticulo/>}/>
      <Route path='/category' element={<CrearArticulo/>}/>
      <Route path='/brand' element={<CrearArticulo/>}/>
      <Route path='/product' element={<CrearArticulo/>}/>
      <Route path='/atr' element={<CrearArticulo/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default Ap