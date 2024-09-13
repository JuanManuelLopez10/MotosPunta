import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import db from '../../data/FirestoreData';

const WallpaperIndex = () => {
    const context = useContext(CartContext);
    const [productShown, setproductShown] = useState(undefined);
    const GetWallpaperProduct = async () => {

        const ProductosCollection = collection(db, "Productos");

        // const MotosCollection = collection(db, "Cascos");
        const motosSnapshot = await getDocs(ProductosCollection);

        const Datos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}))
        setproductShown(Datos[Datos.findIndex(pro=>pro.product.Wallpaper==='SI')])
        // Datos.map(ddd=>{
        //     if(ddd.product.product.Type)
        //     addDoc(ProductosCollection, ddd.product.product)
        // })
        // Datos.map(a=>{
            
        //     if (a.product.id) {
        //         deleteDoc(doc(db, "Products", a.));
        //         console.log(a.id);
                
        //     }
        // })
        // Datos.find((el)=>el.product.Wallpaper==='SI')
        // console.log(Datos[0].product.Wallpaper);
        
        
    
    }
    if (productShown===undefined) {
        GetWallpaperProduct()    
        
    }



    if (!productShown) {
        return null; // O puedes mostrar un spinner o algo similar
    }

    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
        if (context.Section === 'Wallpaper') {
            return (
                <section onTouchMove={(event) => {context.handleTouchMove(event, 'HotProducts', 'Wallpaper', 'Wallpaper')}} onTouchStart={context.handleTouchStart} id='IndexWallpaper'>
                    <h3 style={{ fontSize: context.fontPixel * 2.5 }}>
                        {productShown.product.Brand.toUpperCase()} {productShown.product.Pattern.toUpperCase()} {productShown.product.Cilind}
                    </h3>
                    <Link to={`product/${productShown.id}`} onClick={() => {
                        context.setSection('FirstView');
                        context.setPresection('Wallpaper');
                        context.setScreen('Product');
                    }} id='IndexWallpaper-ViewMore' style={{ fontSize: context.fontPixel * 1.2 }}>
                        Ver más
                    </Link>
                    <img id='IndexWallpaper-ProductImage' src={productShown.product.Options[0].Image} alt="" />
                </section>
            );
        }
        return (
            <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'Subiendo', 'Wallpaper')}} onTouchStart={context.handleTouchStart} id='IndexWallpaperAfter'>
                <h3 style={{ fontSize: context.fontPixel * 2.5 }}>
                    {productShown.product.Brand.toUpperCase()} {productShown.product.Pattern.toUpperCase()} {productShown.product.Cilind}
                </h3>
                <button id='IndexWallpaperAfter-ViewMore' style={{ fontSize: context.fontPixel * 1.2 }}>
                    Ver más
                </button>
                <img id='IndexWallpaperAfter-ProductImage' src={productShown.product.Options[0].Image} alt="" />
            </section>
        );
    }

    const texto = `${productShown.product.Cilind} ${productShown.product.Pattern}`;
    const cantidadDeLetras = texto.length;

    if (context.Screen === 'Index') {
        return (
            <section id="WallpaperPC">
                <div id="backtop">
                    <div id='Textos'>
                        <h3 id='Title' style={{ letterSpacing: `calc(80vw / ${cantidadDeLetras} - 1ch)`, fontSize: context.fontPixel * 2.4 }}>
                            {productShown.product.Cilind} <span style={{ color: productShown.product.Options[0] }}>{productShown.product.Pattern.toUpperCase()}</span>
                        </h3>
                        <div id="LittleTexts">
                            <p style={{ fontSize: context.fontPixel * 0.5 }}>{productShown.product.Brand.toUpperCase()}</p>
                            <Link id='ViewMoreButton' style={{ fontSize: context.fontPixel * 0.3 }} to={`/product/${productShown.id}`}>Ver más</Link>
                        </div>
                    </div>
                    <img id='WallpaperImg' src={`${productShown.product.Options[0].Image}`} alt="" />
                </div>
            </section>
        );
    }

    return (
        <section id="WallpaperPCClosed">
            <div id="backtop">
                <div id='Textos'>
                    <h3 id='Title' style={{ letterSpacing: `calc(80vw / ${cantidadDeLetras} - 1ch)`, fontSize: context.fontPixel * 2.4 }}>
                        {productShown.product.Cilind} <span style={{ color: productShown.product.Options[0] }}>{productShown.product.Pattern.toUpperCase()}</span>
                    </h3>
                    <div id="LittleTexts">
                        <p style={{ fontSize: context.fontPixel * 0.5 }}>{productShown.product.Brand.toUpperCase()}</p>
                        <Link id='ViewMoreButton' style={{ fontSize: context.fontPixel * 0.3 }} to={`/product/${productShown.id}`}>Ver más</Link>
                    </div>
                </div>
                <img id='WallpaperImg' src={`${productShown.product.Options[0].Image}`} alt="" />
            </div>
        </section>
    );
};

export default WallpaperIndex;