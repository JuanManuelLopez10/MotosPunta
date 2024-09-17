import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';
import { collection, getDocs } from 'firebase/firestore';
import db from '../data/FirestoreData';
import ClassFilters from '../components/ClassScreen/ClassFilters';
// import ClassFilters from '../components/ClassScreen/ClassFilters';

const ClassScreen = () => {
  const context = useContext(CartContext);

  const location = useLocation();
  const productId = location.pathname.split('/product/')[1];
  const currentClase = location.pathname.split('/clase/')[1];
  const [Productos, setProductos] = useState([])
  const GetProductos = async () => {
    const MotosCollection = collection(db, 'Productos');
    const motosSnapshot = await getDocs(MotosCollection);
    const DAATos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}));

    
    const FilteredDatos = DAATos.filter(producto => producto.product.Type===currentClase)
    if (FilteredDatos[0]) {
      setProductos(FilteredDatos)   
    }
    
    }

  // Solo actualizar el estado si cambia la clase seleccionada
  useEffect(() => {
      GetProductos()
    
  }, [currentClase]);

  const orderToLessPrice = () => {
    Productos.sort((a, b) => a.price - b.price)
  }
  

  // Renderización móvil
  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
    if (context.Screen === 'Clase') {
      return (
        <div id="Clase">
          <h2>{currentClase}</h2>
          {/* <ClassFilters Productos={Productos}/> */}
          <ClassProducts productId={productId} Productos={Productos} />
        </div>
      );
    } else {
      return (
        <div id="ClaseClosed">
          <h2>{currentClase}</h2>
          <ClassProducts Productos={Productos} />
        </div>
      );
    }
  } else { // Renderización en pantallas más grandes
    return (
      <div id={context.Screen === 'Clase' ? "ClassScreen" : "ClassScreenHidden"}>
        {/* <ClassFilters ArrayOfMotosTypes={ArrayOfMotosTypes} Clase={ClaseSelected} /> */}
        <ClassProducts Productos={Productos} />
      </div>
    );
  }
};

export default React.memo(ClassScreen);