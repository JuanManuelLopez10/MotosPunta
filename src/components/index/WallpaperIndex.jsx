import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import db from '../../data/FirestoreData';

const WallpaperIndex = (props) => {
    const context = useContext(CartContext);
    const productShown = props.producto



    if (productShown!==undefined) {

    }

    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
        console.log(productShown);
        
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