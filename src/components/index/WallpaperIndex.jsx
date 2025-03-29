import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import db from '../../data/FirestoreData';

const WallpaperIndex = (props) => {
    const context = useContext(CartContext);
    const productShown = props.producto

    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
        
        if (context.Section === 'Wallpaper') {
            return (
                <section onTouchMove={(event) => {context.handleTouchMove(event, 'HotProducts', 'Wallpaper', 'Wallpaper')}} onTouchStart={context.handleTouchStart} id='IndexWallpaper'>
                    <h3 style={{ fontSize: context.fontPixel * 2.5 }}>
                        {productShown.product.brand.toUpperCase()} {productShown.product.model.toUpperCase()} {productShown.product.cilind}
                    </h3>
                    <Link to={`product/${productShown.id}`} onClick={() => {
                        context.setSection('FirstView');
                        context.setPresection('Wallpaper');
                        context.setScreen('Product');
                    }} id='IndexWallpaper-ViewMore' style={{ fontSize: context.fontPixel * 1.2 }}>
                        Ver más
                    </Link>
                    <img id='IndexWallpaper-ProductImage' src={productShown.product.imageLink} alt="" />
                </section>
            );
        }
        return (
            <section onTouchMove={(event) => {context.handleTouchMove(event, 'Segundo', 'Subiendo', 'Wallpaper')}} onTouchStart={context.handleTouchStart} id='IndexWallpaperAfter'>
                <h3 style={{ fontSize: context.fontPixel * 2.5 }}>
                    {productShown.product.brand.toUpperCase()} {productShown.product.model.toUpperCase()} {productShown.product.cilind}
                </h3>
                <button id='IndexWallpaperAfter-ViewMore' style={{ fontSize: context.fontPixel * 1.2 }}>
                    Ver más
                </button>
                <img id='IndexWallpaperAfter-ProductImage' src={productShown.product.imageLink} alt="" />
            </section>
        );
    }
    
    const texto = `${productShown.product.cilind} ${productShown.product.model}`;
    const cantidadDeLetras = texto.length;

    if (context.Screen === 'Index') {
        return (
            <section id="WallpaperPC">
                <div id="backtop">
                    <div id='Textos'>
                        <h3 id='Title' style={{ letterSpacing: `calc(80vw / ${cantidadDeLetras} - 1ch)`, fontSize: context.fontPixel * 2.4 }}>
                            <span>{productShown.product.title.toUpperCase()}</span>
                        </h3>
                        <div id="LittleTexts">
                            <p style={{ fontSize: context.fontPixel * 0.5 }}>{productShown.product.brand.toUpperCase()}</p>
                            <Link id='ViewMoreButton' style={{ fontSize: context.fontPixel * 0.3 }} to={`/product/${productShown.id}`}>Ver más</Link>
                        </div>
                    </div>
                    <img id='WallpaperImg' src={`${productShown.product.imageLink}`} alt="" />
                </div>
            </section>
        );
    }

    return (
        <section id="WallpaperPCClosed">
            <div id="backtop">
                <div id='Textos'>
                    <h3 id='Title' style={{ letterSpacing: `calc(80vw / ${cantidadDeLetras} - 1ch)`, fontSize: context.fontPixel * 2.4 }}>
                        {productShown.product.cilind} <span>{productShown.product.model.toUpperCase()}</span>
                    </h3>
                    <div id="LittleTexts">
                        <p style={{ fontSize: context.fontPixel * 0.5 }}>{productShown.product.brand.toUpperCase()}</p>
                        <Link id='ViewMoreButton' style={{ fontSize: context.fontPixel * 0.3 }} to={`/product/${productShown.id}`}>Ver más</Link>
                    </div>
                </div>
                <img id='WallpaperImg' src={`${productShown.product.imageLink}`} alt="" />
            </div>
        </section>
    );
};

export default WallpaperIndex;