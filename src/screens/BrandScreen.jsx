import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ClassProducts from '../components/ClassScreen/ClassProducts';

import ClassFilters from '../components/ClassScreen/ClassFilters';

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
    const FilteredDatos = DAATos.filter(producto => producto.product.brand===currentbrand)
    if (FilteredDatos[0]) {
      setProductos(FilteredDatos)   
      setFilteredProductos(FilteredDatos)
    }
    }
  useEffect(() => {
    GetProductos()
      setoperFilters(false)
      if (currentbrand!==undefined) {
        context.setScreen("Brand")
      }
  }, [currentbrand]);

  
  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
    if (context.Screen === 'Brand' && Productos[0]) {
      return (
        <div id="Clase">
          <div style={{display:'flex', width:'100vw', justifyContent:'space-around'}}>
          <h2>{currentbrand}</h2>
          <button id="OpenFilters" style={{border:'none'}} onClick={()=>{setoperFilters(!operFilters)}}>
            <h3>Filtros</h3>
          </button>
          </div>
          <ClassFilters setoperFilters={setoperFilters} operFilters={operFilters} setFilteredProductos={setFilteredProductos} Productos={Productos}/>
          <ClassProducts productId={productId} Productos={FilteredProductos} />
        </div>
      );
    } else {
      return (
        <div id="ClaseClosed">
          <h2>{currentbrand}</h2>
          <ClassProducts Productos={Productos} />
        </div>
      );
    }

  } else { // Renderización en pantallas más grandes
    return (
      <div id={context.Screen === 'Brand' ? "ClassScreen" : "ClassScreenHidden"}>
          <ClassFilters setoperFilters={setoperFilters} operFilters={operFilters} setFilteredProductos={setFilteredProductos} Productos={Productos}/>
        <ClassProducts Productos={Productos} />
      </div>
    );
  }
};

export default React.memo(BrandScreen);