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
  const context = useContext(CartContext)
    const [OpenMenu, setOpenMenu] = useState(false)  
    useEffect(() => {

      const handleResize = () => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        context.setHeigth(windowHeight)
        context.setWidth(windowWidth)

      };
      handleResize(); // Llama a la función para obtener el tamaño inicial
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
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
    
    if(context.Datos.length>1){
      return (
        <BrowserRouter>
        
        <Navbar OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        <NavbarMenuMobile OpenMenu={OpenMenu} setOpenMenu={setOpenMenu}/>
        {/* <NavbarPC/> */}
          <CreateArticle/>
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