import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';

import ClassFilters from '../components/ClassScreen/ClassFilters';
import { Helmet } from 'react-helmet';

const BrandScreen = (props) => {
  const context = useContext(CartContext);

  const location = useLocation();
  const productId = location.pathname.split('/product/')[1];
  const currentbrand = location.pathname.split('/brand/')[1];
  const [Productos, setProductos] = useState([])
  const [FilteredProductos, setFilteredProductos] = useState([])

  const [operFilters, setoperFilters] = useState(false)

  const GetProductos = async () => {
    const DAATos = props.articulos
    const FilteredDatos = DAATos.filter(producto => producto.product.brand === currentbrand)
    if (FilteredDatos[0]) {
      setProductos(FilteredDatos)
      setFilteredProductos(FilteredDatos)
    }
  }
  useEffect(() => {
    GetProductos()
    setoperFilters(false)
    if (currentbrand !== undefined) {
      context.setScreen("Brand")
    }
  }, [currentbrand]);

    if (context.Screen === 'Brand' && Productos[0]) {

  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
      return (
        <div id="Clase">
          <Helmet>
            <title>{currentbrand + " | Motos Punta"}</title>
            <meta name="description" content={`Encuentra todos los productos ${currentbrand} en nuestro local.`} />
          </Helmet>
          <div style={{ display: 'flex', width: '100vw', justifyContent: 'space-around' }}>
            <h2>{currentbrand}</h2>
            <button id="OpenFilters" style={{ border: 'none' }} onClick={() => { setoperFilters(!operFilters) }}>
              <h3>Filtros</h3>
            </button>
          </div>
          <ClassFilters setoperFilters={setoperFilters} operFilters={operFilters} setFilteredProductos={setFilteredProductos} Productos={Productos} />
          <ClassProducts productId={productId} Productos={FilteredProductos} />
        </div>
      );
  

  } else { // Renderización en pantallas más grandes
    return (
      <div id="ClassScreen">
        <ClassFilters setoperFilters={setoperFilters} operFilters={operFilters} setFilteredProductos={setFilteredProductos} Productos={Productos} />
        <ClassProducts Productos={Productos} />
      </div>
    );
  }
};
}
export default React.memo(BrandScreen);