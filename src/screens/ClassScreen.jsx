import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';
import { collection, getDocs } from 'firebase/firestore';
import db from '../data/FirestoreData';
// import ClassFilters from '../components/ClassScreen/ClassFilters';

const ClassScreen = () => {
  const context = useContext(CartContext);

  const location = useLocation();
  const productId = location.pathname.split('/product/')[1];
  const currentClase = location.pathname.split('/clase/')[1];


  const [ClaseSelected, setClaseSelected] = useState(currentClase || 'Naked');

  // Solo actualizar el estado si cambia la clase seleccionada
  useEffect(() => {
    if (currentClase !== ClaseSelected) {
      setClaseSelected(currentClase);
    }
  }, [currentClase, ClaseSelected]);

  // Renderización móvil
  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
    if (context.Screen === 'Clase') {
      return (
        <div id="Clase">
          <h2>{currentClase}</h2>
          <ClassProducts productId={productId} Clase={currentClase || ClaseSelected} />
        </div>
      );
    } else {
      return (
        <div id="ClaseClosed">
          <h2>{ClaseSelected}</h2>
          <ClassProducts Clase={ClaseSelected} />
        </div>
      );
    }
  } else { // Renderización en pantallas más grandes
    return (
      <div id={context.Screen === 'Clase' ? "ClassScreen" : "ClassScreenHidden"}>
        {/* <ClassFilters ArrayOfMotosTypes={ArrayOfMotosTypes} Clase={ClaseSelected} /> */}
        <ClassProducts Clase={ClaseSelected} />
      </div>
    );
  }
};

export default React.memo(ClassScreen);