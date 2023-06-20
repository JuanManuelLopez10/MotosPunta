import React, { useContext, useEffect } from 'react'
import IndexWallpaper from '../components/index/IndexWallpaper'
import Categories from '../components/index/Categories'
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment, getDoc, getDocs } from "firebase/firestore"
import db from '../data/FirestoreData'
import { CartContext } from '../context/CartContext'
import BrandsContainer from '../components/index/BrandsContainer'

const Index = () => {
  const { Datos, handleDatos } = useContext(CartContext)

  const getProducts = async () => {
    const productsCollection = collection(db, 'products');

    try {
      const querySnapshot = await getDocs(productsCollection);
      let products = []
      querySnapshot.forEach((doc) => {
        const producto = {
          id: doc.id,
          product: doc.data()
        }
        products.push(producto)
      });
      handleDatos(products)
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };
  useEffect(()=>{
    getProducts()
  },[])

  

  return (
    <>
    <IndexWallpaper/>
    <Categories/>    
    <BrandsContainer/>
    </>
    )
}

export default Index