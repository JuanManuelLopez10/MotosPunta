import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import ProductFirstView from '../components/Product/ProductFirstView';
import PCProductFirstView from '../components/Product/PCProductFirstView';
import PCColors from '../components/Product/PCColors';


const Product = (props) => {

  const { Orientation, Screen } = useContext(CartContext);
  const productId = useLocation().pathname.split('/product/')[1];
  const [producto, setproducto] = useState(undefined)
  
  const getProduct = async () => {
    const DAATos = props.articulos
    const producto = DAATos.find(prod=>prod.id===productId)
    if (!producto){
      const producto = DAATos.find(prod=>prod.itemGroupId===productId)
      setproducto(producto)

    }
    setproducto(producto)

}

useEffect(() => {
  getProduct()
  }, [productId])




  const [OptionSelected, setOptionSelected] = useState(0);



  const renderMobileView = () => (
    <div id={Screen === 'Product' || Screen === 'Clase' ? "Product1" : "ProductClosed"}>


      <ProductFirstView producto={producto} setproducto={setproducto} articulos={props.articulos} OptionSelected={OptionSelected} />
      

    </div>
  );

  const renderPCView = () => (
    <div id="PCProductScreen">
      <PCProductFirstView 
        producto={producto} 
        setOptionSelected={setOptionSelected} 
        OptionSelected={OptionSelected} 
      />
      <PCColors producto={producto} />
    </div>
  );

  return (
    Orientation === 'portrait-primary' || Orientation === 'portrait-secondary'
      ? renderMobileView()
      : Screen === 'Product' && renderPCView()
  );
};

export default Product;