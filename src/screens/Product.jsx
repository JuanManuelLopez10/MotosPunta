import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import ProductFirstView from '../components/Product/ProductFirstView';
import PCProductFirstView from '../components/Product/PCProductFirstView';
import ProductViewMore from '../components/Product/ProductViewMore';
import ProductBenefitModal from '../components/Product/ProductBenefitModal';
import PCBenefits from '../components/Product/PCBenefits';
import PCColors from '../components/Product/PCColors';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import db from '../data/FirestoreData';

const Product = () => {

  const { SelectedClass, ProductShown, setProductShown, Orientation, Screen } = useContext(CartContext);
  const productId = useLocation().pathname.split('/product/')[1];
  const [producto, setproducto] = useState(undefined)
  const clasee = SelectedClass!==null ? SelectedClass[0].toUpperCase() + SelectedClass.substring(1) : null
  const getProduct = async () => {

    const docRef = doc(db, "Productos", productId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
    setproducto({id: docSnap.id, product:docSnap.data()})
    

    } else {
      const ProductosCollection = collection(db, "Productos");
      const motosSnapshot = await getDocs(ProductosCollection);
      const pro = motosSnapshot.docs[motosSnapshot.docs.findIndex((doc)=>doc.data().id===productId)]
      const PProducto = {id:pro.id, product:pro.data()}
      setproducto(PProducto)
    }
  // const DAATos = motosSnapshot.docs.map((doc) => doc.data())
  
  // const produ = DAATos.findIndex(pr => pr.product.id===productId)
  // if (DAATos[produ]) {    
  //   setProductShown(DAATos[produ])
  //   setproducto(DAATos[produ])    
  // }
}

useEffect(() => {
  getProduct()
  }, [productId])




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
        producto={producto} 
        setOptionSelected={setOptionSelected} 
        OptionSelected={OptionSelected} 
      />
      <PCBenefits producto={producto} />
      <PCColors producto={producto} />
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