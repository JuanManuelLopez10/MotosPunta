import React, { useContext, useState, useMemo } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const NavbarMenuMobile = ({ OpenMenu, setOpenMenu }) => {
  const { Datos, fontPixel, setMenuSelectedClass, setScreen, Clases, changeCategory } = useContext(CartContext);
  
  const [SelectedClass, setSelectedClass] = useState(undefined);

  // Función para seleccionar la clase
  const selectClass = (clase) => {
    console.log(clase);
    
    setSelectedClass(clase);
    setMenuSelectedClass(clase);
  };

  // Memo para evitar el cálculo repetido de `arrayTypes` y `arrayClases`
  const arrayClases = ['motos', 'cascos','accesorios', 'indumentaria']
  if (Clases) {
    return (
        <>
          <button
            onClick={() => setSelectedClass(undefined)}
            className={SelectedClass !== undefined ? 'MenuMobileGoBackOpen' : 'MenuMobileGoBackClosed'}
            id='MenuMobileGoBack'
          >
            <p style={{ fontSize: fontPixel * 1.3 }}>
              {'<'}
            </p>
          </button>
    
          <div id='MenuMobile' className={OpenMenu ? 'MenuMobileOpened' : 'MenuMobileClosed'}>
            <div id='MenuMobileClass' className={OpenMenu && SelectedClass === undefined ? 'MenuMobileClassOpen' : 'MenuMobileClassClosed'}>
              {arrayClases.map((clase, index) => (
                <button
                  key={index}
                  onClick={() => selectClass(clase)}
                  className={OpenMenu && SelectedClass === undefined ? 'MenuOption MenuOptionOpen' : 'MenuOption MenuOptionClosed'}
                >
                  <p>{clase.toUpperCase()}</p>
                </button>
              ))}
            </div>
    
            {arrayClases.map((clase, index) => (
              <div
                key={index}
                id='MenuMobileType'
                className={OpenMenu && SelectedClass === clase ? 'MenuMobileClassOpen' : 'h-0 MenuMobileClassClosed'}
              >
    
                {Clases
                  .filter(tipo => tipo.clase === SelectedClass)
                  .map((tipo, index) => (
                    <Link
                      key={index}
                      onClick={() => {
                        setOpenMenu(false);
                        setSelectedClass(undefined);
                        setScreen('Clase');
                        changeCategory(tipo)
                      }}
                      to={`/clase/${tipo.tipo}`}
                      className='MenuOption'
                    >
                      <p>{tipo.tipo.toUpperCase()}</p>
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </>
      );
    
  }
};

export default NavbarMenuMobile;