import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import MenuOption from './MenuOption';


const Navbar = () => {
  const [isVisible, setisVisible] = useState(false)
  const context = useContext(CartContext)
  const abrirMenu = () => {
    context.handleOpenMenu()
  } 
  const obtenerRoote = document.getElementById('roote') 
  if (obtenerRoote) {
    if (context.OpenMenu===true) {
      obtenerRoote.className='openmenu'
    }else{
      obtenerRoote.className='closedmenu'
  
    }    
  }


    return (
      <>

        <div className='Navbar'>

        <button className='openOptionsButton' onClick={() => abrirMenu()}>
            <i className="bi-list openOptions" style={{ fontSize: context.fontPixel * 1.5 }}></i>
          </button>

          <Link to={`/`} onClick={()=>{
            context.changeScreen('Inicio')
          }} className='navbarLogoDiv'>
            <img src="./assets/logos/LOGO-sf.png" alt="Motos Punta" className='navbarLogo' />
          </Link>


          <Link to={`/Carrito`} className='openOptionsButton' id='CarritoButton'>
            <i className="bi-cart openOptions" style={{ fontSize: context.fontPixel * 1.5 }}></i>
          </Link>
          
        </div>
        
      </>
    )

}

export default Navbar