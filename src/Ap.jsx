import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import Menu from './components/menu/Menu';
import ClassCreen from './screens/ClassScreen'
import ProductScreen from './screens/ProductScreen';
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment, getDoc, getDocs } from "firebase/firestore"
import db from './data/FirestoreData'
import CrearArticulo from './screens/CrearArticulo'
import Carrito from './screens/Carrito';
const Ap = () => {
    const context = useContext(CartContext)
    const { Datos, handleDatos, Ofertas, handleOfertas } = useContext(CartContext)

    const getProducts = async () => {
      const productsCollection = collection(db, 'products');
      const offersCollection = collection(db, 'Offers');
  
      try {
        const querySnapshot = await getDocs(productsCollection);
        
        let products = []
        querySnapshot.forEach((doc) => {
          const producto = {
            id: doc.id,
            product: doc.data()
          }
          products.push(producto)
        });
        handleDatos(products)
  
        const querySnapshot2 = await getDocs(offersCollection);
        
        let offers = []
        querySnapshot2.forEach((doc) => {
          const offer = {
            id: doc.id,
            offer: doc.data()
          }
          offers.push(offer)
        });
        handleOfertas(offers)
  
  
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    useEffect(()=>{
      getProducts()
    },[])
    const mediaQuera = window.matchMedia("(prefers-color-scheme: dark)")


    const getCurrentOrientation = async () => {
      const mediaQuery = window.matchMedia("(orientation: portrait)");
      const isPortrait = mediaQuery.matches;
      const widthscreen = window.innerWidth
      const heigthscreen = window.innerHeight

      if (isPortrait) {
        context.handleOrientation('Portrait', widthscreen, heigthscreen)
      } else {
        context.handleOrientation('Landscape', widthscreen, heigthscreen)
      }
      context.handleFontPixel(widthscreen)
    }  
    getCurrentOrientation()
    window.addEventListener("resize", getCurrentOrientation);
    
    
  return (
    <BrowserRouter>
    <Menu/>
    
    <div id='roote' className={context.OpenMenu===true ? 'openmenu': 'closedmenu'} >
    {
        context.Orientation==='Portrait'
        ?
        <Navbar/>
        :
        ''
      }
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/product/:idProduct' element={<ProductScreen/>}/>
      <Route path='/clase/:idClase' element={<ClassCreen/>}/>
      <Route path='/atr' element={<CrearArticulo/>}/>
      <Route path='/Carrito' element={<Carrito/>}/>
      {/* <Route path='/atr' element={<CrearArticulo/>}/>
      <Route path='/getCredit' element={<GetCreditScreen/>}/>
      <Route path='/brand' element={<CrearArticulo/>}/>
      <Route path='/product' element={<CrearArticulo/>}/> */}
    </Routes>
    {/* <Footer/> */}

      
    </div>
    </BrowserRouter>
  )
}

export default Ap