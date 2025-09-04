import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const WallpaperIndex = (props) => {
    const context = useContext(CartContext);
    const productShown = props.producto
    if (context.Screen === 'Index') {

    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
        
            return (
                <section onTouchStart={context.handleTouchStart} id='PortraitIndexWallpaper'>
                    <h3 style={{ fontSize: context.fontPixel * 2.5 }}>
                        {productShown.product.brand.toUpperCase()} {productShown.product.model.toUpperCase()} {productShown.product.cilind}
                    </h3>
                    <Link to={`product/${productShown.id}`} onClick={() => {
                        context.setSection('FirstView');
                        context.setPresection('Wallpaper');
                        context.setScreen('Product');
                    }} id='PortraitIndexWallpaper-ViewMore' style={{ fontSize: context.fontPixel * 1.2 }}>
                        Ver más
                    </Link>
                    <img id='IndexWallpaper-ProductImage' src={productShown.product.imageLink} alt="" />
                </section>
            );
    }else{
    const texto = `${productShown.product.cilind} ${productShown.product.model}`;
    const cantidadDeLetras = texto.length;

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
    

    }

};

export default WallpaperIndex;