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
// import FetchFromSheety from './data/FetchFromSheety';
// import { initClient, handleAuthClick, handleSignoutClick } from './data/Gapi';
// FetchFromSheety
const Ap = () => {
  const { setHeigth, setWidth, setOrientation, Datwos, GetClases } = useContext(CartContext);
  const [OpenMenu, setOpenMenu] = useState(false);
  const [articulos, setArticulos] = useState([])
  const fetchProducts = async () => {
    // const products = await FetchFromGoogle()
    // setArticulos(FetchFromSheety())
    // await FetchFromGoogle()
    const productos = await FetchFromFirestore()
    setArticulos(productos)
    console.log(productos[0])
  }
  
  // const fetchProductsArray = async () => {
  //   try {
  //     // Realiza la solicitud para obtener el contenido del archivo
  //     const response = await fetch("/productos.txt");
  
  //     // Verifica si la respuesta es exitosa
  //     if (!response.ok) {
  //       throw new Error(`Error al cargar el archivo: ${response.statusText}`);
  //     }
  
  //     const text = await response.text();
  
  //     // Convierte el texto directamente a JSON
  //     const productArray = JSON.parse(text);
  
  //     setArticulos(productArray); // Retorna el array de productos
  //     console.log(articulos);
      
  //   } catch (error) {
  //     console.error("Error al leer o parsear el archivo:", error);
  //     return []; // Retorna un array vacío en caso de error
  //   }
  // };



  // Manejo de redimensionamiento y orientación
  useEffect(() => {
    const handleResizeAndOrientationChange = () => {
      setHeigth(window.innerHeight);
      setWidth(window.innerWidth);
      setOrientation(window.screen.orientation.type);
      GetClases()
      fetchProducts()
      // fetchProductsArray()

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
          <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
          <NavbarMenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu} />
          <CreateArticle />
          <Index articulos={articulos} />
          <ClassScreen />
          <Product/>
        </BrowserRouter>
      );
    
    }


  return null; // Puedes mostrar un loader aquí si lo deseas mientras se cargan los datos.
};

export default Ap;