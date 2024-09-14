import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import WallpaperIndex from '../components/index/WallpaperIndex'
import HotProducts from '../components/index/HotProducts'
import Brands from '../components/index/Brands'
import WhiteBack from '../components/index/WhiteBack'
import { useLocation } from 'react-router-dom'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import db from '../data/FirestoreData'


const Index = () => {
  const context = useContext(CartContext)
  const location = useLocation().pathname.split("/clase/")[1];
  const productId = useLocation().pathname.split('/product/')[1]
  const [WallpaperProduct, setWallpaperProduct] = useState(undefined)
  const [HotProduct, setHotProduct] = useState([])
  const [BrandsArray, setBrands] = useState([])
  if(location!==undefined){
    context.setScreen('Clase')
  }else if(productId!==undefined && context.Section==='Wallpaper'){
  context.setScreen('Product')
  context.setSection('FirstView')
}  
  const getProducts = async () => {
    const ProductosCollection = collection(db, "Productos");
    const motosSnapshot = await getDocs(ProductosCollection);
    const Datos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}))
    const HotProducts = Datos.filter(producto => producto.product.HotProduct!=='No')
    const brands = Datos.map((doc)=>({Name:doc.product.Brand, clase:doc.product.Class})).filter((item, index, self) => 
      index === self.findIndex((t) => t.Name === item.Name)
    );
    setBrands(brands);
    
    setHotProduct(HotProducts)    
    setWallpaperProduct(Datos[Datos.findIndex(pro=>pro.product.Wallpaper==='SI')])
    
  }
  useEffect(() => {
    getProducts()
    }, [])
    if (WallpaperProduct!==undefined) {
      return (
        <>
        <div id='Index'>
        <WallpaperIndex producto={WallpaperProduct}/>
        <WhiteBack/>
        <HotProducts HotProducts={HotProduct}/>  
        <Brands Brands={BrandsArray}/>
    
        </div>
        
    
        </>
        )
    
    }


}

export default Index