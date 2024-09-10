import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ClasesPCMenu from './ClasesPCMenu';

const Navbar = ({ OpenMenu, setOpenMenu }) => {
  const { Orientation, fontPixel, Screen, MoveToScreen } = useContext(CartContext);
  const [SelectedOpcion, setSelectedOpcion] = useState(undefined);

  // Renderizado del menú móvil
  const renderMobileNavbar = () => {
    const isProductOrClassScreen = Screen === 'Product' || Screen === 'Clase';
    const iconColor = isProductOrClassScreen ? 'grey' : 'white';

    return (
      <div id='NavbarMobile' className='animate__animated animate__fadeInDown'>
        <Link onClick={() => MoveToScreen(Screen, 'Index')} id='NavbarMobileLogo' to='/'>
          <img src="/assets/LOGO.png" alt="Logo" id='NavbarMobileLogo' />
        </Link>
        <div>
          <button
            id='NavbarMobileMenuButton'
            onClick={() => setOpenMenu(!OpenMenu)}
          >
            <i
              style={{ fontSize: fontPixel * 1.5, color: iconColor }}
              id='NavbarMobileMenuButtonI'
              className={OpenMenu ? "bi bi-x" : "bi bi-list"}
            ></i>
          </button>
        </div>
      </div>
    );
  };

  // Renderizado del menú para pantallas grandes (PC)
  const renderPCNavbar = () => {
    const ArrayOfOptions = ['motos', 'cascos', 'indumentaria', 'accesorios'];
    const isProductOrClassScreen = Screen === 'Product' || Screen === 'Clase';
    const iconColor = isProductOrClassScreen ? 'grey' : 'white';

    return (
      <>
        <div id='NavbarPC' className='animate__animated animate__fadeInDown'>
          <Link onClick={() => MoveToScreen(Screen, 'Index')} id='NavbarPCLogo' to='/'>
            <img src="/assets/LOGO.png" alt="Logo" id='NavbarMobileLogo' />
          </Link>
          <div id='NavbarPCOpciones'>
            {ArrayOfOptions.map((opcion, index) => (
              <button
                key={index}
                onClick={() => setSelectedOpcion(SelectedOpcion === opcion ? undefined : opcion)}
                id='NavbarPCOpcionesLink'
              >
                {opcion.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {SelectedOpcion && (
          <ClasesPCMenu setSelectedOpcion={setSelectedOpcion} SelectedOpcion={SelectedOpcion} />
        )}
      </>
    );
  };

  return (
    Orientation === 'portrait-primary' || Orientation === 'portrait-secondary'
      ? renderMobileNavbar()
      : renderPCNavbar()
  );
};

export default Navbar;