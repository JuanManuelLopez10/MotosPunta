import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import ProductFirstView from '../components/Product/ProductFirstView';
import PCProductFirstView from '../components/Product/PCProductFirstView';
import ProductViewMore from '../components/Product/ProductViewMore';
import ProductBenefitModal from '../components/Product/ProductBenefitModal';
import PCBenefits from '../components/Product/PCBenefits';
import PCColors from '../components/Product/PCColors';
import { collection, getDocs } from 'firebase/firestore';
import db from '../data/FirestoreData';

const Product = () => {

  const { Datos, SelectedClass, ProductShown, setProductShown, Orientation, Screen } = useContext(CartContext);
  const productId = useLocation().pathname.split('/product/')[1];
  const [producto, setproducto] = useState(undefined)
  const clasee = SelectedClass!==null ? SelectedClass[0].toUpperCase() + SelectedClass.substring(1) : null

    if (productId !== undefined) {
      setProductShown(productId);
    }


  const getProduct = async () => {
    
  const MotosCollection = collection(db, clasee);
  const motosSnapshot = await getDocs(MotosCollection);
  const DAATos = motosSnapshot.docs.map((doc) => doc.data())
  
  const produ = DAATos.findIndex(pr => pr.product.id===productId)
  if (DAATos[produ]) {    
    setProductShown(DAATos[produ])
    setproducto(DAATos[produ])    
  }
}
if (productId && clasee!==null) {
getProduct()
  
}
  const [OptionSelected, setOptionSelected] = useState(0);
  const [BenefitSelected, setBenefitSelected] = useState(undefined);



  const renderMobileView = () => (
    <div id={Screen === 'Product' || Screen === 'Clase' ? "Product1" : "ProductClosed"}>
      <ProductFirstView producto={producto} OptionSelected={OptionSelected} />
      <ProductViewMore 
        setOptionSelected={setOptionSelected} 
        OptionSelected={OptionSelected} 
        producto={producto} 
        setBenefitSelected={setBenefitSelected}
      />
      {Screen === 'Product' && (
        <ProductBenefitModal setBenefitSelected={setBenefitSelected} BenefitSelected={BenefitSelected} />
      )}
    </div>
  );

  const renderPCView = () => (
    <div id="PCProductScreen">
      <PCProductFirstView 
        producto={ProductShown} 
        setOptionSelected={setOptionSelected} 
        OptionSelected={OptionSelected} 
      />
      <PCBenefits producto={ProductShown} />
      <PCColors producto={ProductShown} />
    </div>
  );

  // Condicional basado en la orientación del dispositivo
  return (
    Orientation === 'portrait-primary' || Orientation === 'portrait-secondary'
      ? renderMobileView()
      : Screen === 'Product' && renderPCView()
  );
};

export default Product;