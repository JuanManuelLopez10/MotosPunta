import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';

import ClassFilters from '../components/ClassScreen/ClassFilters';
import { Helmet } from 'react-helmet';

const ClassScreen = (props) => {
  const context = useContext(CartContext);

  const location = useLocation();
  const productId = location.pathname.split('/product/')[1];
  const currentClase = location.pathname.split('/clase/')[1];
  const [Productos, setProductos] = useState([])
  const [FilteredProductos, setFilteredProductos] = useState([])

  const [operFilters, setoperFilters] = useState(false)

  const GetProductos = async () => {
    const DAATos = props.articulos

    const FilteredDatos = DAATos.filter(producto => producto.product.type === currentClase)
    if (FilteredDatos[0]) {
      setProductos(FilteredDatos)
      setFilteredProductos(FilteredDatos)
    }
  }



  useEffect(() => {
    GetProductos()
    setoperFilters(false)

  }, [currentClase]);


  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
    if (context.Screen === 'Clase' && Productos[0]) {
      return (
        <div id="Clase">
          <Helmet>
            <title>{currentClase + " | Motos Punta"}</title>
            <meta name="description" content={`Encuentra ${currentClase} de todas nuestras marcas en nuestro local.`} />
          </Helmet>
          <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-around' }}>
            <h2>{currentClase}</h2>
            <button id="OpenFilters" style={{ border: 'none' }} onClick={() => { setoperFilters(!operFilters) }}>
              <h3>Filtros</h3>
            </button>
          </div>
          <ClassFilters setoperFilters={setoperFilters} GetProductos={GetProductos} operFilters={operFilters} setFilteredProductos={setFilteredProductos} Productos={FilteredProductos} />
          <ClassProducts productId={productId} Productos={FilteredProductos} />
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
        <Helmet>
          <title>{currentClase + " | Motos Punta"}</title>
          <meta name="description" content={`Encuentra ${currentClase} de todas nuestras marcas en nuestro local.`} />
        </Helmet>
        <ClassFilters setoperFilters={setoperFilters} GetProductos={GetProductos} operFilters={operFilters} setFilteredProductos={setFilteredProductos} allProducts={props.articulos} Productos={FilteredProductos} />
        <ClassProducts Productos={FilteredProductos} />
      </div>
    );
  }
};

export default React.memo(ClassScreen);