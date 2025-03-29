import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import WallpaperIndex from '../components/index/WallpaperIndex'
import HotProducts from '../components/index/HotProducts'
import Brands from '../components/index/Brands'
import WhiteBack from '../components/index/WhiteBack'
import { useLocation } from 'react-router-dom'


const Index = ({articulos}) => {
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
  const getProducts = () => {
    const Datos = articulos
    const HotProducts = Datos.filter(producto => producto.product.hotProduct!=='No')
    const brands = Datos.map((doc)=>({Name:doc.product.brand, clase:doc.product.class})).filter((item, index, self) => 
      index === self.findIndex((t) => t.Name === item.Name)
    );
    setBrands(brands);
    
    setHotProduct(HotProducts)    
    setWallpaperProduct(Datos[Datos.findIndex(pro=>pro.product.wallpaper==='SI')])
    
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