import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../data/FirestoreData';

const WallpaperIndex = () => {

    const {setSection, setPresection, setScreen, Orientation, setselectedClass, Section, handleTouchStart, handleTouchMove, fontPixel, } = useContext(CartContext);
    const [productShown, setproductShown] = useState(undefined);
    const GetWallpaperProduct = async () => {
        const MotosCollection = collection(db, "Motos");
        const motosSnapshot = await getDocs(MotosCollection);
        const DAATos = motosSnapshot.docs.map((doc) => doc.data())
        const index =  DAATos.findIndex(pro=>pro.product.Wallpaper==='SI')
        console.log(DAATos[index]);
        setproductShown(DAATos[index])
    
    }
    if (productShown===undefined) {
        GetWallpaperProduct()    
        
    }



    if (!productShown) {
        return null; // O puedes mostrar un spinner o algo similar
    }

    if (Orientation === 'portrait-primary' || Orientation === 'portrait-secondary') {
        if (Section === 'Wallpaper') {
            return (
                <section onTouchMove={(event) => {handleTouchMove(event, 'HotProducts', 'Wallpaper', 'Wallpaper')}} onTouchStart={handleTouchStart} id='IndexWallpaper'>
                    <h3 style={{ fontSize: fontPixel * 2.5 }}>
                        {productShown.product.Brand.toUpperCase()} {productShown.product.Pattern.toUpperCase()} {productShown.product.Cilind}
                    </h3>
                    <Link to={`product/${productShown.id}`} onClick={() => {
                        setSection('FirstView');
                        setPresection('Wallpaper');
                        setScreen('Product');
                        setselectedClass(productShown.product.Class)
                    }} id='IndexWallpaper-ViewMore' style={{ fontSize: fontPixel * 1.2 }}>
                        Ver más
                    </Link>
                    <img id='IndexWallpaper-ProductImage' src={productShown.product.Options[0].Image} alt="" />
                </section>
            );
        }
        return (
            <section onTouchMove={(event) => {handleTouchMove(event, 'Segundo', 'Subiendo', 'Wallpaper')}} onTouchStart={handleTouchStart} id='IndexWallpaperAfter'>
                <h3 style={{ fontSize: fontPixel * 2.5 }}>
                    {productShown.product.Brand.toUpperCase()} {productShown.product.Pattern.toUpperCase()} {productShown.product.Cilind}
                </h3>
                <button id='IndexWallpaperAfter-ViewMore' style={{ fontSize: fontPixel * 1.2 }}>
                    Ver más
                </button>
                <img id='IndexWallpaperAfter-ProductImage' src={productShown.product.Options[0].Image} alt="" />
            </section>
        );
    }

    const texto = `${productShown.product.Cilind} ${productShown.product.Pattern}`;
    const cantidadDeLetras = texto.length;

    if (Screen === 'Index') {
        return (
            <section id="WallpaperPC">
                <div id="backtop">
                    <div id='Textos'>
                        <h3 id='Title' style={{ letterSpacing: `calc(80vw / ${cantidadDeLetras} - 1ch)`, fontSize: fontPixel * 2.4 }}>
                            {productShown.product.Cilind} <span style={{ color: productShown.product.Options[0] }}>{productShown.product.Pattern.toUpperCase()}</span>
                        </h3>
                        <div id="LittleTexts">
                            <p style={{ fontSize: fontPixel * 0.5 }}>{productShown.product.Brand.toUpperCase()}</p>
                            <Link id='ViewMoreButton' style={{ fontSize: fontPixel * 0.3 }} to={`/product/${productShown.id}`}>Ver más</Link>
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
                    <h3 id='Title' style={{ letterSpacing: `calc(80vw / ${cantidadDeLetras} - 1ch)`, fontSize: fontPixel * 2.4 }}>
                        {productShown.product.Cilind} <span style={{ color: productShown.product.Options[0] }}>{productShown.product.Pattern.toUpperCase()}</span>
                    </h3>
                    <div id="LittleTexts">
                        <p style={{ fontSize: fontPixel * 0.5 }}>{productShown.product.Brand.toUpperCase()}</p>
                        <Link id='ViewMoreButton' style={{ fontSize: fontPixel * 0.3 }} to={`/product/${productShown.id}`}>Ver más</Link>
                    </div>
                </div>
                <img id='WallpaperImg' src={`${productShown.product.Options[0].Image}`} alt="" />
            </div>
        </section>
    );
};

export default WallpaperIndex;