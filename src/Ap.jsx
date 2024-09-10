import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Index from './screens/Index';
import Navbar from './components/navbar/Navbar';
import NavbarMenuMobile from './components/navbar/NavbarMenuMobile';
import ClassScreen from './screens/ClassScreen';
import Product from './screens/Product';
import CartScreen from './screens/CartScreen';
import CreateArticle from './screens/CrearArticulo';
// import { initClient, handleAuthClick, handleSignoutClick } from './data/Gapi';

const Ap = () => {
  const { setHeigth, setWidth, setOrientation, Datos, GetClases } = useContext(CartContext);
  const [OpenMenu, setOpenMenu] = useState(false);

  // Manejo de redimensionamiento y orientación
  useEffect(() => {
    const handleResizeAndOrientationChange = () => {
      setHeigth(window.innerHeight);
      setWidth(window.innerWidth);
      setOrientation(window.screen.orientation.type);
      GetClases()
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

    return (
      <BrowserRouter>
        <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
        <NavbarMenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
        <CreateArticle />
        <Index />
        <ClassScreen />
        <Product />
      </BrowserRouter>
    );
  

  return null; // Puedes mostrar un loader aquí si lo deseas mientras se cargan los datos.
};

export default Ap;