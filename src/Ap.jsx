import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import CrearArticulo from './screens/CrearArticulo';

const Ap = () => {
    const { handleOrientation, handleFontPixel } = useContext(CartContext)
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
      <Route path='/atr' element={<CrearArticulo/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default Ap