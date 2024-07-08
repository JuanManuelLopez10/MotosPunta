import React, { useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import ClassCreen from './screens/ClassScreen'
import ProductScreen from './screens/ProductScreen';
import { collection, increment, getDoc, getDocs } from "firebase/firestore"
import db, { firebaseConfig, st } from './data/FirestoreData'

import LoadingScreen from './components/LOADING.JSX';
import Navbar from './components/navbar/Navbar';
import NavbarMenuMobile from './components/navbar/NavbarMenuMobile';
import ClassScreen from './screens/ClassScreen';
import Product from './screens/Product';
import CartScreen from './screens/CartScreen';
// import { initClient, handleAuthClick, handleSignoutClick } from './data/Gapi';

const Ap = () => {
  const { setOrientation, AddImages, setWidth, setHeigth, handleDatos, Datos } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true);
    const [OpenMenu, setOpenMenu] = useState(false)  

  
      

    useEffect(() => {

      const handleResize = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        setHeigth(windowHeight)
        setWidth(windowWidth)

      };
  
      handleResize(); // Llama a la función para obtener el tamaño inicial
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    const handleOrientationChange = () => {
      const orientacion = window.screen.orientation.type;
      setOrientation(orientacion);
    };

    useEffect(()=>{
      handleDatos()
      AddImages()
      handleOrientationChange();
      window.addEventListener('orientationchange', handleOrientationChange);
      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
      };

    },[])
    if(Datos.length>0){
      return (
        <BrowserRouter>
        
        <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        <NavbarMenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        {/* <NavbarPC/> */}
        {isLoading===undefined && (
          <LoadingScreen/>
          )}
          
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
      handleDatos()
    }
}

export default Ap