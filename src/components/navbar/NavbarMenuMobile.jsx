import React, { useContext, useState, useMemo, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FetchFromTXT } from '../../data/FetchFromTXT';

const NavbarMenuMobile = ({ OpenMenu, setOpenMenu }) => {
  const { Datos, fontPixel, setMenuSelectedClass, setScreen, changeCategory } = useContext(CartContext);
  const [Clases, setClases] = useState([])
  const [articulos, setArticulos] = useState([])
  const fetchProducts = async () => {
    const productos = await FetchFromTXT()
    setArticulos(productos)
    const clasess = productos.map((doc) => doc.product).map((doc) => ({ tipo: doc.Type, clase: doc.Clase }))
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

  // Función para seleccionar la clase
  const selectClass = (clase) => {    
    setSelectedClass(clase);
    console.log(clase);
    
    setMenuSelectedClass(clase);
  };

  // Memo para evitar el cálculo repetido de `arrayTypes` y `arrayClases`
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