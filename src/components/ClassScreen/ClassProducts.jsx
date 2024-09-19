import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ClassProducts = (props) => {
  const context = useContext(CartContext);

  if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
    return (
      <section id="ClassProducts">
        {
          props.Productos.map((producto, key)=>{
            return(
              <Link 
              onClick={() => {
                context.setSection('FirstView');
                context.setScreen('Product');
              }}
              key={key} 
              id={producto.id} 
              to={`product/${producto.product.id}`} 
              className="ProductCard"
              style={{height:'20vh', width:'100vw', display:'flex'}}
               >
                <img style={{height:'80%'}} src={producto.product.Options[0].Image} alt="" />
                <div className='ProductoNameDiv'>
                <p style={{fontSize:context.fontPixel*1}}>{producto.product.Title}</p>
                <p style={{fontSize:context.fontPixel*1}}>U$S{producto.product.Price}</p>

                </div>
               </Link>
            )

          })
        }

      </section>
    );
  } else {
    return (
      <section id="ClassProducts">
        {
          props.Productos.map((producto, key) => {
            const showProduct = (
              (context.BrandFilters === undefined && context.CilindFilters === undefined) ||
              (context.BrandFilters === undefined && context.CilindFilters === producto.product.Cilind) ||
              (context.CilindFilters === undefined && context.BrandFilters === producto.product.Brand) ||
              (context.BrandFilters === producto.product.Brand && context.CilindFilters === producto.product.Cilind)
            );

            if (showProduct) {
              return (
                <Link 
                  key={key} 
                  onClick={() => context.setScreen('Product')} 
                  to={`product/${producto.id}`} 
                  className='PCProductOption'
                >
                  <div className='ImageContainer'>
                    <img src={producto.product.Options[0].Image} alt="" />
                  </div>
                  <p className="PCProductOptionName" style={{ fontSize: context.fontPixel * 0.35 }}>
                    {producto.product.Title}
                  </p>
                  <p className="PCProductOptionPrice" style={{ fontSize: context.fontPixel * 0.35 }}>
                    {producto.product.Price} USD
                  </p>
                </Link>
              );
            }
            return null; // Si no pasa el filtro, no renderizar nada
          })
        }
      </section>
    );
  }
}

export default React.memo(ClassProducts);