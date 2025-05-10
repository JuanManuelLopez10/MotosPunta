import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import Navbar from './components/navbar/Navbar';
import NavbarMenuMobile from './components/navbar/NavbarMenuMobile';
import CreateArticle from './screens/CrearArticulo';
import { FetchFromFirestore, FetchFromGoogle, FetchFromTXT } from './data/FetchFromTXT';
import ClassScreen from './screens/ClassScreen';
import Product from './screens/Product';
import BrandScreen from './screens/BrandScreen';
import AgendaScreen from './screens/AgendaScreen';
// import FetchFromSheety from './data/FetchFromSheety';
// import { initClient, handleAuthClick, handleSignoutClick } from './data/Gapi';
// FetchFromSheety

const Ap = () => {
  const { setHeigth, setWidth, setOrientation, Datwos, GetClases } = useContext(CartContext);
  const [OpenMenu, setOpenMenu] = useState(false);
  const [articulos, setArticulos] = useState([])
  const fetchProducts = async () => {

    const productos = await FetchFromFirestore()
    setArticulos(productos)
    console.log(productos[0])
  }
  

  useEffect(() => {
    const handleResizeAndOrientationChange = () => {
      setHeigth(window.innerHeight);
      setWidth(window.innerWidth);
      setOrientation(window.screen.orientation.type);
      GetClases()
      fetchProducts()

    };

    handleResizeAndOrientationChange(); // Ejecutar al inicio
    window.addEventListener('resize', handleResizeAndOrientationChange);
    window.addEventListener('orientationchange', handleResizeAndOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResizeAndOrientationChange);
      window.removeEventListener('orientationchange', handleResizeAndOrientationChange);
    };
  }, [setHeigth, setWidth, setOrientation]);
  
  // Carga de datos inicial
    if (articulos[0]) {
      return (
        <BrowserRouter>
          <Navbar  articulos={articulos}  OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
          <NavbarMenuMobile  articulos={articulos}  OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
          <CreateArticle articulos={articulos}/>
          <Index articulos={articulos} />
          <ClassScreen setArticulos={setArticulos} articulos={articulos} />
          <Product  articulos={articulos} />
          <BrandScreen articulos={articulos}/>
          <AgendaScreen/>
        </BrowserRouter>
      );
    
    }


  return null; // Puedes mostrar un loader aquí si lo deseas mientras se cargan los datos.
};

export default Ap;