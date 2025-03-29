import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const NavbarMenuMobile = ({ OpenMenu, setOpenMenu, articulos }) => {
  const { fontPixel, setMenuSelectedClass, setScreen, changeCategory } = useContext(CartContext);
  const [Clases, setClases] = useState([])
  const fetchProducts = async () => {
    const clasess = articulos.map((doc) => doc.product).map((doc) => ({ tipo: doc.type, clase: doc.productType }))
    const clasesMotos = clasess.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.tipo === value.tipo && t.clase === value.clase
      ))
    )    
    setClases(clasesMotos)
  }

  useEffect(()=>{
    fetchProducts()
  },[])
  const [SelectedClass, setSelectedClass] = useState(undefined);

  const selectClass = (clase) => {    
    setSelectedClass(clase);
    
    setMenuSelectedClass(clase);
  };

  const arrayClases = ['motos', 'cascos','accesorios', 'indumentaria']
  if (Clases[0]) {
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