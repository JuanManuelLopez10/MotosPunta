import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const context = useContext(CartContext)
    

    if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {
        return (
            <div id='NavbarMobile' className='animate__animated animate__fadeInDown'>
                <Link onClick={()=>{context.MoveToScreen(context.Screen, 'Index')}} id='NavbarMobileLogo' to='/'>            
                    <img src="/assets/LOGO.png" alt="Logo" id='NavbarMobileLogo'/>
                </Link>
                <div>
                <button id='NavbarMobileMenuButton' onClick={()=>{props.setOpenMenu(props.OpenMenu===true ? false : true)}}>
                    <i style={{fontSize: context.fontPixel*1.5, color: context.Screen==='Product' || context.Screen==='Clase' ? 'grey' : 'white'}} id='NavbarMobileMenuButtonI' class={props.OpenMenu===false ? "bi bi-list" : "bi bi-x"}></i>
                </button>
                <Link id='NavbarMobileCartButton' onClick={()=>{context.setScreen('Cart')}}>
                    <i style={{fontSize: context.fontPixel*1.4, color: context.Screen==='Product' || context.Screen==='Clase' ? 'grey' : 'white'}} id='NavbarMobileCartButtonI' class="bi bi-cart"></i>
                    <span id='NavbarCartLength' style={{fontSize:context.fontPixel*.6}}>{context.TotalQuantity}</span>
                </Link>
                </div>

            </div>
          )
    }

}

export default Navbar