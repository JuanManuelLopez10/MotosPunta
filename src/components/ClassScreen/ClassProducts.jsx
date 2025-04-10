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
              to={`product/${producto.id}`} 
              className="ProductCard"
              style={{height:'20vh', width:'100vw', display:'flex'}}
               >
                <img style={{height:'80%'}} src={producto.product.imageLink} alt="" />
                <div className='ProductoNameDiv'>
                <p style={{fontSize:context.fontPixel*1}}>{producto.product.title}</p>
                <p style={{fontSize:context.fontPixel*1}}>U$S{producto.product.price}</p>

                </div>
               </Link>
            )

          })
        }

      </section>
    );
  } else {
    const productosUnicos = props.Productos.filter((producto, index, self) =>
      index === self.findIndex(p => p.product.title === producto.product.title && producto.product.availability==="in stock")
    );
    
    return (
      <section id="ClassProducts">
        {
          productosUnicos.map((producto, key) => {
            const showProduct = (
              (context.BrandFilters === undefined && context.CilindFilters === undefined) ||
              (context.BrandFilters === undefined && context.CilindFilters === producto.product.cilind) ||
              (context.CilindFilters === undefined && context.BrandFilters === producto.product.brand) ||
              (context.BrandFilters === producto.product.Brand && context.CilindFilters === producto.product.cilind)
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
                    <img src={producto.product.imageLink} alt="" />
                  </div>
                  <p className="PCProductOptionName" style={{ fontSize: context.fontPixel * 0.35, textAlign:"center", width:"100%" }}>
                    {producto.product.title}
                  </p>
                  <p className="PCProductOptionPrice" style={{ fontSize: context.fontPixel * 0.35, width:"100%", textAlign:"center" }}>
                    {producto.product.price}
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