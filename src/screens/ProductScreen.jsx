import React, { useContext, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import FirstView from '../components/Product/FirstView';
import Benefits from '../components/Product/Benefits';
import ProductOptions from '../components/Product/ProductOptions';
import ModalSelected from '../components/Product/ModalSelected';
import { collection } from 'firebase/firestore';

const ProductScreen = () => {
    const context = useContext(CartContext);
//     const [producto, setproducto] = useState({})
//     const productId = useLocation().pathname.split('/product/')[1];
//     const clasee = context.SelectedClass!==null ? context.SelectedClass[0].toUpperCase() + context.SelectedClass.substring(1) : null

//     const getProduct = async () => {
//     const MotosCollection = collection(db, clasee);
//     const motosSnapshot = getDocs(MotosCollection);
//     const DAATos = motosSnapshot.docs.map((doc) => doc.data());
//     const produ = DAATos.findIndex(pr=>pr.id===productId)
//     setproducto(DAATos[produ])
//   }
    
//   getProduct()
//   console.log(producto);
  

    // const [selectedOption, setSelectedOption] = useState(undefined);

    // if (!producto) {
    //     return null; // No se encontró el producto, no renderizamos nada
    // }

    // return (
    //     <div id="ProductScreen">
    //         <FirstView setSelectedOption={setSelectedOption} SelectedOption={producto.Options[0]} producto={producto} />
    //         <Benefits producto={producto} />
    //         {producto.Options.length > 1 && (
    //             <ProductOptions setSelectedOption={setSelectedOption} producto={producto} />
    //         )}
    //         {selectedOption !== undefined && (
    //             <ModalSelected setSelectedOption={setSelectedOption} SelectedOption={selectedOption} producto={producto} />
    //         )}
    //     </div>
    // );
};

export default ProductScreen;