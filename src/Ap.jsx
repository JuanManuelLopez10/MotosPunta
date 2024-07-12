import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import Navbar from './components/navbar/Navbar';
import NavbarMenuMobile from './components/navbar/NavbarMenuMobile';
import ClassScreen from './screens/ClassScreen';
import Product from './screens/Product';
import CartScreen from './screens/CartScreen';
// import { initClient, handleAuthClick, handleSignoutClick } from './data/Gapi';

const Ap = () => {
  const context = useContext(CartContext)
    const [OpenMenu, setOpenMenu] = useState(false)  

    const handleOrientationChange = () => {
      const orientacion = window.screen.orientation.type;
      context.setOrientation(orientacion);
    };

    useEffect(()=>{
      context.handleDatos()
      handleOrientationChange();
      window.addEventListener('orientationchange', handleOrientationChange);
      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
      };

    },[])
    if(context.Datos.length>0){
      return (
        <BrowserRouter>
        
        <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        <NavbarMenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        {/* <NavbarPC/> */}
          
          <Index/>
          <ClassScreen/>
          <Product/>
          <CartScreen/>
          {/* <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/product/:idProduct' element={<ProductScreen/>}/>
          <Route path='/clase/:idClase' element={<ClassCreen/>}/>
          <Route path='/atr' element={<CrearArticulo/>}/>
          {/* <Route path='/Carrito' element={<Carrito/>}/> */}
          {/* <Route path='/atr' element={<CrearArticulo/>}/>
          <Route path='/getCredit' element={<GetCreditScreen/>}/>
          <Route path='/brand' element={<CrearArticulo/>}/>
          <Route path='/product' element={<CrearArticulo/>}/> */}
        {/* </Routes> */}
    
        {/* <Footer/> */}
    
          
        </BrowserRouter>
      )
    
    }else{
      context.handleDatos()
    }
}

export default Ap