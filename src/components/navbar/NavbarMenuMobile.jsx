import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const NavbarMenuMobile = ({ OpenMenu, setOpenMenu, articulos }) => {
  const { fontPixel, setMenuSelectedClass, setScreen, changeCategory, Orientation } = useContext(CartContext);
  const [Clases, setClases] = useState([])
  const navigate = useNavigate()
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
  if (Orientation === 'portrait-primary' || Orientation === 'portrait-secondary') {
        if (Clases[0]) {
    return (
        <>
          {
            SelectedClass !== undefined &&
          <button
            onClick={() => setSelectedClass(undefined)}
            className='MenuMobileGoBackOpen'
            id='MenuMobileGoBack'
          >
            <p style={{ fontSize: fontPixel * 1.3}}>
              {'<'}
            </p>
          </button>
          }

    

          <div id='MenuMobile' className={OpenMenu ? 'MenuMobileOpened' : 'MenuMobileClosed'}>
            {
              OpenMenu && SelectedClass === undefined &&
            <div id='MenuMobileClass'>
              {arrayClases.map((clase, index) => (
                <button
                  key={index}
                  onClick={() => selectClass(clase)}
                  className={OpenMenu && SelectedClass === undefined ? 'MenuOption MenuOptionOpen' : 'MenuOption MenuOptionClosed'}
                >
                  <p>{clase.toUpperCase()}</p>
                </button>
              ))}
                <button
                  key={"Agenda"}
                  className={OpenMenu && SelectedClass === undefined ? 'MenuOption MenuOptionOpen' : 'MenuOption MenuOptionClosed'}
                  onClick={() => {
                    setOpenMenu(false);
                    setSelectedClass(undefined);
                    setScreen('Agenda');
                    navigate("/Agenda")
                  }}
                >
                  <p>AGENDA</p>
                </button>
            </div>
            }
          
    

            {arrayClases.map((clase, index) => {
              if(OpenMenu && SelectedClass === clase){
                return(
                                <div
                key={index}
                id='MenuMobileType'
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
                )
              }
            }

            )}

          </div>
        </>
      );
    
  }
      
      }
};

export default NavbarMenuMobile;