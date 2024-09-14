import React, { useContext, useState, useMemo } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const HotProducts = (props) => {
    const context = useContext(CartContext);
    const [selectedOption, setSelectedOption] = useState(0);
    const [buttonPressed, setButtonPressed] = useState('Next');
    const getHotProducts = async () => {
        
    }
    // Memoizar la lista de productos destacados y categorías
    const arrayOfHotProducts = props.HotProducts

    const arrayOfCategories = useMemo(() => {
        const prearrayOfCategories = arrayOfHotProducts.map(producto => producto.product.Class);
        return [...new Set(prearrayOfCategories)];  // Elimina categorías duplicadas
    }, [arrayOfHotProducts]);

    const handleNextPrev = (direction) => {
        setSelectedOption(prev => {
            if (direction === 'Next') {
                return prev === arrayOfHotProducts.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? arrayOfHotProducts.length - 1 : prev - 1;
            }
        });
        setButtonPressed(direction);
    };

    // Renderizar para pantallas móviles
    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
        if (context.Section === 'HotProducts') {
            return (
                <section onTouchMove={(event) => context.handleTouchMove(event, 'IndexBrands', 'Wallpaper', 'HotProducts')} onTouchStart={context.handleTouchStart} id="IndexHotProducts">
                    <h2>Productos destacados</h2>
                    {arrayOfCategories.map((clase, index) => (
                        <div key={clase}>
                            <h3>{clase.toUpperCase()}</h3>
                            <div className="ClassRow">
                                {arrayOfHotProducts.filter(producto => producto.product.Class === clase).map((producto, i) => (
                                    <Link key={producto.id} to={`product/${producto.id}`} onClick={() => {
                                        context.setSection('FirstView');
                                        context.setPresection('Wallpaper');
                                        context.setScreen('Product');
                                    }} className="ProductCard">
                                        <img src={producto.product.Options[0].Image} alt={producto.product.Model} />
                                        <h4 style={{ fontSize: context.fontPixel }}>{`${producto.product.Brand} ${producto.product.Model} ${producto.product.Cilind}`}</h4>
                                        <p className="ProductType" style={{ fontSize: context.fontPixel * 0.7 }}>{producto.product.Type}</p>
                                        <p className="ProductPrice" style={{ fontSize: context.fontPixel * 1.1 }}>{`${producto.product.Coin} ${producto.product.Price}`}</p>
                                        <button className="LikeButton"><i className="bi bi-heart"></i></button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            );
        }
    }

    // Renderizar para pantallas de escritorio
    if (arrayOfHotProducts.length > 0 && context.Screen === 'Index') {
        const selectedProduct = arrayOfHotProducts[selectedOption].product;
        
        const productText = `${selectedProduct.Pattern} ${selectedProduct.Cilind || ''}`;

        return (
            <section id="PCHotProducts">
                <div id="HPSectionTitle">
                    <h2 style={{ fontSize: context.fontPixel * 4 }}>DESTACADOS</h2>
                    <h3 style={{ fontSize: context.fontPixel * 1.8 }}>DESTACADOS</h3>
                </div>
                <div id="ProductDiv">
                    <div id="DivOfImages">
                        {arrayOfHotProducts.map((producto, index) => (
                            <img key={producto.id} src={producto.product.Options[0].Image} alt={producto.product.Model} className={selectedOption === index ? 'Seleccionada' : 'NoSeleccionada'} />
                        ))}
                    </div>
                    <div id="Informacion">
                        <h4 style={{ fontSize: context.fontPixel * 0.8 }}>{productText}</h4>
                        <div id="Buttons">
                            <button onClick={() => handleNextPrev('Prev')} className={buttonPressed === 'Prev' ? 'BotonSelected' : 'BotonNoSelected'}>{'<'}</button>
                            <button onClick={() => handleNextPrev('Next')} className={buttonPressed === 'Next' ? 'BotonSelected' : 'BotonNoSelected'}>{'>'}</button>
                        </div>
                        <p>{selectedProduct.Brand}</p>
                        <p style={{ fontSize: context.fontPixel * 0.35 }}>{`${selectedProduct.Benefits[0].Description}. ${selectedProduct.Benefits[1]?.Description}.`}</p>
                        <Link to={`/product/${arrayOfHotProducts[selectedOption].id}`} style={{ fontSize: context.fontPixel * 0.2 }}>VER MÁS</Link>
                    </div>
                </div>
            </section>
        );
    }

    return null;
};

export default HotProducts;