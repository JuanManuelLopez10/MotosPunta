import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ClasesPCMenu from './ClasesPCMenu'

const Navbar = (props) => {
    const context = useContext(CartContext)
    const [SelectedOpcion, setSelectedOpcion] = useState(undefined)
    const HandleOpen= (opcion) => {
        if (SelectedOpcion===opcion) {
            
        }
    }
    if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {
        return (
            <div id='NavbarMobile' className='animate__animated animate__fadeInDown'>
                <Link onClick={()=>{context.MoveToScreen(context.Screen, 'Index')}} id='NavbarMobileLogo' to='/'>            
                    <img src="/assets/LOGO.png" alt="Logo" id='NavbarMobileLogo'/>
                </Link>
                <div>
                <button id='NavbarMobileMenuButton' onClick={()=>{props.setOpenMenu(props.OpenMenu===true ? false : true)}}>
                    <i style={{fontSize: context.fontPixel*1.5, color: context.Screen==='Product' || context.Screen==='Clase' ? 'grey' : 'white'}} id='NavbarMobileMenuButtonI' className={props.OpenMenu===false ? "bi bi-list" : "bi bi-x"}></i>
                </button>
                <Link to='/Cart' id='NavbarMobileCartButton' onClick={()=>{context.setScreen('Cart')}}>
                    <i style={{fontSize: context.fontPixel*1.4, color: context.Screen==='Product' || context.Screen==='Clase' ? 'grey' : 'white'}} id='NavbarMobileCartButtonI' className="bi bi-cart"></i>
                    <span id='NavbarCartLength' style={{fontSize:context.fontPixel*.6}}>{context.TotalQuantity}</span>
                </Link>
                </div>

            </div>
          )
    }else{
        const ArrayOfOptions = ['motos', 'cascos', 'indumentaria', 'accesorios']
        return (
            <>
            <div id='NavbarPC' className='animate__animated animate__fadeInDown'>
                <Link onClick={()=>{context.MoveToScreen(context.Screen, 'Index')}} id='NavbarPCLogo' to='/'>            
                    <img src="/assets/LOGO.png" alt="Logo" id='NavbarMobileLogo'/>
                </Link>
                <div id='NavbarPCOpciones'>
                    {
                        ArrayOfOptions.map((opcion, index) => {
                            return(
                                <button key={index} onClick={()=>{setSelectedOpcion(SelectedOpcion===opcion ? undefined : opcion)}} id='NavbarPCOpcionesLink'>{opcion.toUpperCase()}</button>
                            )
                        })
                    }
                </div>
            <Link id="NavbarPCCartButton">
                <i style={{fontSize: context.fontPixel*.5, color: context.Screen==='Product' || context.Screen==='Clase' ? 'grey' : 'white'}} id='NavbarPCCartButtonI' className="bi bi-cart"></i>
            </Link>
            </div>
            {
                SelectedOpcion!==undefined
                ?
                <ClasesPCMenu setSelectedOpcion={setSelectedOpcion} SelectedOpcion={SelectedOpcion}/>
                :''
            }
            </>
          )
    }

}

export default Navbar