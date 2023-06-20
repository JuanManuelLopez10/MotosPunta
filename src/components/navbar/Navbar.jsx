import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import MenuOption from './MenuOption';


const Navbar = () => {
  const [isVisible, setisVisible] = useState(false)
  const { Orientation, fontPixel, Width } = useContext(CartContext)
  const arrayOptions = ['Motos', 'Cascos', 'Indumentaria', 'Accesorios', 'Marcas', 'Contacto']
  const [MenuOptions, setMenuOptions] = useState()

  const Motos = ['Polleritas', 'Calle', 'Scooters', 'Naked', 'Enduro', 'Deportivas', 'Touring']
  const Cascos = ['Polleritas', 'Calle', 'Scooters', 'Naked', 'Enduro', 'Deportivas', 'Touring']
  const Indumentaria = ['Polleritas', 'Calle', 'Scooters', 'Naked', 'Enduro', 'Deportivas', 'Touring']
  const Accesorios = ['Polleritas', 'Calle', 'Scooters', 'Naked', 'Enduro', 'Deportivas', 'Touring']

  const handleSelectOption = (option) => {
    if (option==='Motos') {
      setMenuOptions(Motos)
    }else if (option==='Cascos') {
      setMenuOptions(Cascos)
    }else if (option==='Indumentaria') {
      setMenuOptions(Indumentaria)
    }else if (option==='Accesorios') {
      setMenuOptions(Accesorios)
    }else if (option==='Motos') {
      setMenuOptions(Motos)
    }
  }
  if (Orientation === 'Portrait') {
    return (
      <>


        <div className='Navbar'>
          <Link to={`/`} className='navbarLogoDiv'>
            <img src="./assets/logos/LOGO-sf.png" alt="Motos Punta" className='navbarLogo' />
          </Link>

          {
            isVisible === false
              ? <button className='openOptionsButton' onClick={() => setisVisible(true)}>
                <i className="bi-list openOptions" style={{ fontSize: fontPixel * 1.5 }}></i>
              </button>
              : <button className='openOptionsButton' onClick={() => {
                setisVisible(false)
                setMenuOptions()
              }}>
                <i className="bi-x-lg openOptions" style={{ fontSize: fontPixel }}></i>
              </button>
          }
        </div>

        {
          isVisible === true
            ? <div className='menu animate__animated animate__fadeInLeft'>
                <div className='menuOptions'>
                  {
                    MenuOptions
                    ?
                    MenuOptions.map(item =>
                      <MenuOption item={item} key={item} fontPixel={fontPixel * 3} onSelect={handleSelectOption}/>
                  )
                  : arrayOptions.map(item =>
                    <MenuOption item={item} key={item} fontPixel={fontPixel * 3} onSelect={handleSelectOption}/>
                    )
                    
                  }
                </div>
              </div>
            : ()=>setMenuOptions(arrayOptions)
        }
      </>
    )
  } else {                                        //LANDSCAPE
    return (
      <>
        <div className='Navbar'>
        {
                isVisible === false
              ? <button className='openOptionsButton' onClick={() => setisVisible(true)}>
                <i className="bi-list openOptions" style={{fontSize: Width<=700 ? fontPixel * 0.7 :  fontPixel * 0.4 , alignSelf: 'center'}}></i>
              </button>
              : <button className='openOptionsButton' onClick={() => {
                setisVisible(false)
                setMenuOptions()
              }}>
                <i className="bi-x-lg openOptions" style={{fontSize: Width<=700 ? fontPixel * 0.7 :  fontPixel * 0.4 , alignSelf: 'center'}}></i>
              </button>
            }
          <Link to={`/`} className='navbarLogoDiv'>
            <img src="./assets/logos/LOGO-sf.png" alt="Motos Punta" className='navbarLogo' style={{width: Width<=700 ? '10vw' :  '5vw' , height: 'auto'}} />
        </Link>
        </div>

        {
          isVisible === true
            ? <div className='menu animate__animated animate__fadeInLeft'>
                <div className='menuOptions'>
                  {
                    MenuOptions
                    ?
                    MenuOptions.map(item =>
                      <MenuOption item={item} key={item} fontPixel={fontPixel} Orientation={Orientation} onSelect={handleSelectOption}/>
                  )
                  : arrayOptions.map(item =>
                    <MenuOption item={item} key={item} fontPixel={fontPixel} onSelect={handleSelectOption}/>
                    )
                    
                  }
                </div>
              </div>
            : ()=>setMenuOptions(arrayOptions)
        }


      </>
    )
  }

}

export default Navbar