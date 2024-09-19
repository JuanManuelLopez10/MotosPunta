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
  const [Productos, setProductos] = useState([])
  const [openOrder, setopenOrder] = useState(false)
  
  const GetProductos = async () => {
    const MotosCollection = collection(db, 'Productos');
    const motosSnapshot = await getDocs(MotosCollection);
    const DAATos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}));
    const FilteredDatos = DAATos.filter(producto => producto.product.Type===currentClase)
    if (FilteredDatos[0]) {
      setProductos(FilteredDatos)   
    }
    }

    
    
  useEffect(() => {
      GetProductos()
  }, [currentClase]);

  const orderToMorePrice = () => {
    const sortedProducts = [...Productos].sort((a, b) => a.product.Price - b.product.Price);
    setProductos(sortedProducts);
  }
  const orderToLessPrice = () => {
    const sortedProducts = [...Productos].sort((a, b) => b.product.Price - a.product.Price);
    setProductos(sortedProducts);  }
  
  // Renderización móvil
  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
    if (context.Screen === 'Clase' && Productos[0]) {
      return (
        <div id="Clase">
          <h2>{currentClase}</h2>
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
        <ClassProducts Productos={Productos} />
      </div>
    );
  }
};

export default React.memo(ClassScreen);