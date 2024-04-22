import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import ClassCreen from './screens/ClassScreen'
import ProductScreen from './screens/ProductScreen';
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment, getDoc, getDocs } from "firebase/firestore"
import db, { firebaseConfig, st } from './data/FirestoreData'
import CrearArticulo from './screens/CrearArticulo'
import Carrito from './screens/Carrito';
import NavbarPC from './components/navbar/NavbarPC';
const Ap = () => {
    const { setOrientation, AddImages, setWidth, setHeigth, ImageStorage, handleDatos } = useContext(CartContext)
    
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

    const getProducts = async () => {
      const productsCollection = collection(db, 'products');
      
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
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    useEffect(()=>{
      getProducts()
      AddImages()
      handleOrientationChange();
      window.addEventListener('orientationchange', handleOrientationChange);
      return () => {
        window.removeEventListener('orientationchange', handleOrientationChange);
      };

    },[])
    
  return (
    <BrowserRouter>
    <NavbarPC/>

      <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/product/:idProduct' element={<ProductScreen/>}/>
      <Route path='/clase/:idClase' element={<ClassCreen/>}/>
      <Route path='/atr' element={<CrearArticulo/>}/>
      {/* <Route path='/Carrito' element={<Carrito/>}/> */}
      {/* <Route path='/atr' element={<CrearArticulo/>}/>
      <Route path='/getCredit' element={<GetCreditScreen/>}/>
      <Route path='/brand' element={<CrearArticulo/>}/>
      <Route path='/product' element={<CrearArticulo/>}/> */}
    </Routes>

    {/* <Footer/> */}

      
    </BrowserRouter>
  )
}

export default Ap