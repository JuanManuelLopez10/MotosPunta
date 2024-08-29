import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ClassProducts = (props) => {
    const context = useContext(CartContext)
    const ProductsArray = context.Datos.filter(producto => producto.product.Type===props.Clase)
    
    const maxNumero2 = 240;
  const minNumero2 = 0;

  const generateArrayWithGradients = (array, maxNumero2, minNumero2) => {
    const step = (maxNumero2 - minNumero2) / 3; // Siempre 3 pasos para 4 elementos
    const newArray = [];

    for (let i = 0; i < array.length; i += 4) {
      const segment = array.slice(i, i + 4);
      const isAscending = (i / 4) % 2 === 0;

      segment.forEach((producto, index) => {
        const numero2 = isAscending 
          ? minNumero2 + index * step 
          : maxNumero2 - index * step;

        newArray.push({ ...producto, numero2 });
      });
    }

    return newArray;
  };

  const productosConNumero2 = generateArrayWithGradients(ProductsArray, maxNumero2, minNumero2);
  if (context.Orientation==='portrait-primary' || context.Orientation==='portrait-secondary') {
    return (
      <section id="ClassProducts">
          {
              productosConNumero2.map((producto, key) => {
                  if(producto.numero2===240){
                      producto.numero2-=40
                  }
                  return(
                      <Link onClick={()=>{context.setSection('FirstView')
                        context.setScreen('Product')
                      }} style={{backgroundColor:`rgb(${producto.numero2+30}, ${producto.numero2+30}, ${producto.numero2+30})`}} key={key} id={producto.id} to={`product/${producto.id}`} className={"ProductCard"}>
                          <div className='ProductoNameDiv' >
                              <p style={{fontSize:context.fontPixel*.5, marginBottom:'-2%'}} >{producto.product.Brand}</p>
                              <p style={{fontSize:context.fontPixel*1.1}} >{producto.product.Title}</p>
                          </div>
                          <img className={producto.product.Class==='motos' ? 'ProductCardImgMoto' : 'ProductCardImgOtro'} src={producto.product.Options[0].Image} alt="" />
                      </Link>
                  )
              })
          }
      </section>
      )
    }else{

      return(
        <section id="ClassProducts">
        {
            ProductsArray.map((producto, key) => {
              if (producto.product.Type===props.Clase) {
                  if (context.BrandFilters===undefined && context.CilindFilters===undefined) {
                    return(
                      <Link key={key} onClick={()=>{context.setScreen('Product')}} to={`product/${producto.id}`} className='PCProductOption'>
                        <div className='ImageContainer'>
                        <img src={producto.product.Options[0].Image} alt=""/>
                        </div>
                        <p className="PCProductOptionName" style={{fontSize:context.fontPixel*.35}}>{producto.product.Title}</p>
                        <p className="PCProductOptionPrice" style={{fontSize:context.fontPixel*.35}}>{producto.product.Price} USD</p>
                      </Link>
                    )
                  }else if(context.BrandFilters===undefined && context.CilindFilters===producto.product.Cilind){
                    return(
                      <Link key={key} onClick={()=>{context.setScreen('Product')}} to={`product/${producto.id}`} className='PCProductOption'>
                        <div className='ImageContainer'>
                        <img src={producto.product.Options[0].Image} alt=""/>
                        </div>
                        <p className="PCProductOptionName" style={{fontSize:context.fontPixel*.35}}>{producto.product.Title}</p>
                        <p className="PCProductOptionPrice" style={{fontSize:context.fontPixel*.35}}>{producto.product.Price} USD</p>
                      </Link>
                    )
                  }else if(context.CilindFilters===undefined && context.BrandFilters===producto.product.Brand){
                    return(
                      <Link key={key} onClick={()=>{context.setScreen('Product')}} to={`product/${producto.id}`} className='PCProductOption'>
                        <div className='ImageContainer'>
                        <img src={producto.product.Options[0].Image} alt=""/>
                        </div>
                        <p className="PCProductOptionName" style={{fontSize:context.fontPixel*.35}}>{producto.product.Title}</p>
                        <p className="PCProductOptionPrice" style={{fontSize:context.fontPixel*.35}}>{producto.product.Price} USD</p>
                      </Link>
                    )
                  }else if(context.BrandFilters===producto.product.Brand && context.CilindFilters===producto.product.Cilind){
                    
                    return(
                      <Link key={key} onClick={()=>{context.setScreen('Product')}} to={`product/${producto.id}`} className='PCProductOption'>
                        <div className='ImageContainer'>
                        <img src={producto.product.Options[0].Image} alt=""/>
                        </div>
                        <p className="PCProductOptionName" style={{fontSize:context.fontPixel*.35}}>{producto.product.Title}</p>
                        <p className="PCProductOptionPrice" style={{fontSize:context.fontPixel*.35}}>{producto.product.Price} USD</p>
                      </Link>
                    )
                  }

              }


            })
        }
    </section>
      )
    }

}

export default ClassProducts