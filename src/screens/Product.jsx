import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import ProductFirstView from '../components/Product/ProductFirstView';
import PCProductFirstView from '../components/Product/PCProductFirstView';
import PCColors from '../components/Product/PCColors';
import { Helmet } from 'react-helmet';
import brands from "../data/brands.json"
import { FetchFromFirestore } from '../data/FetchFromTXT';

const Product = (props) => {

  const { Orientation, Screen } = useContext(CartContext);
  const productId = useLocation().pathname.split('/product/')[1];
  const [producto, setproducto] = useState(undefined)
        const [colores, setColores] = useState([])

  const getProduct = async () => {
    const DAATos = props.articulos
    const producto = DAATos.find(prod => prod.id === productId)
    setproducto(producto)

  }

  useEffect(() => {
    getProduct()
  }, [productId])


  const [OptionSelected, setOptionSelected] = useState(0);

  
  const renderMobileView = (productBrand) => (
    <div id='Product'>
      <div id={producto.product.productType==="motos" ? "BikeProductFirst" : "ProductFirst"} className='MobileProductFirstView'>
        <img src={producto.product.imageLink} alt={producto.product.title}/>
        <div>
          <p>{producto.product.pattern}</p>
        </div>
      </div>
      <div id='MobileProductInfo'>
        <h1>{producto.product.title.toUpperCase()}
            {
            producto.product.productType!=="motos"&&
            <span>{producto.product.pattern}</span>
            }
            </h1>
            <p>{producto.product.description}</p>
      </div>
      <div id='MobileProductColors'>
          {
            colores[1]?
            colores.map(item =>{
                                return(
                  <a className="ProductMobileOption" href={`/product/${item.id}`} >
                    <img key={item.id} src={item.product.imageLink}  alt="" />
                  </a>)
            })
            :""
          }
      </div>

    </div>
  );

  const renderPCView = () => (
    <div id="PCProductScreen">
      <Helmet>
        <title>{producto.product.title ? producto.product.title + " | Motos Punta" : "Motos Punta"}</title>
        <meta name="description" content={`Encuentra ${producto.product.productType} como ${producto.product.productType} en nuestro local.`} />
      </Helmet>
      <PCProductFirstView
        producto={producto}
        setOptionSelected={setOptionSelected}
        OptionSelected={OptionSelected}
      />
      <PCColors producto={producto} />
    </div>
  );

  if (Screen === 'Product') {
      if (producto) {
    const productBrand = brands.find(brand => brand.Name === producto.product.brand) || { img: '', Name: '' };
      const fetchProducts = async () => {
        const productos = await FetchFromFirestore()
        setColores(productos.filter(prod=>prod.product.title===producto.product.title))
      }
        if (!colores[0] || colores[0].product.title!==producto.product.title) {
            fetchProducts()
        }
    return (
      Orientation === 'portrait-primary' || Orientation === 'portrait-secondary'
        ? renderMobileView(productBrand)
        : Screen === 'Product' && renderPCView()
    );
  }
  }
};

export default Product;