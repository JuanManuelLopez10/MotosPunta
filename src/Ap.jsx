import React, { useContext, useEffect, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import ClassCreen from './screens/ClassScreen'
import ProductScreen from './screens/ProductScreen';
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment, getDoc, getDocs } from "firebase/firestore"
import db, { firebaseConfig, st } from './data/FirestoreData'

import LoadingScreen from './components/LOADING.JSX';
import Navbar from './components/navbar/Navbar';
import NavbarMenuMobile from './components/navbar/NavbarMenuMobile';
import ClassScreen from './screens/ClassScreen';
import Product from './screens/Product';
import CartScreen from './screens/CartScreen';
const Ap = () => {
    const { setOrientation, AddImages, setWidth, setHeigth, ImageStorage, handleDatos } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true);
    const [OpenMenu, setOpenMenu] = useState(false)  

    useEffect(() => {
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      let loadedImages = 0;
      
      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          setIsLoading(false);
        }
      };
  
      images.forEach(image => {
        if (image.complete) {
          handleImageLoad();
        } else {
          image.addEventListener('load', handleImageLoad);
        }
      });
  
      return () => {
        images.forEach(image => {
          image.removeEventListener('load', handleImageLoad);
        });
      };
    }, []);

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
}

export default Ap