import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';


const ClassFilters = (props) => {
    const context = useContext(CartContext)

    const [ArrayOfColours, setArrayOfColours] = useState([])
    const [ArrayOfBrands, setArrayOfBrands] = useState([])

    const [selectedBrand, setselectedBrand] = useState(undefined)
    const [selectedColor, setselectedColor] = useState(undefined)
    const [minPrice, setminPrice] = useState()
    const [maxPrice, setmaxPrice] = useState()

    const GetFilterOptions = () => {
        const arrayBrands = []
        const arrayColors = []
        props.Productos.map(producto => {
            if (!arrayColors.includes(producto.product.color)) {
                arrayColors.push(producto.product.color)
                setArrayOfColours(arrayColors)
            }
            if (!arrayBrands.includes(producto.product.brand)) {
                arrayBrands.push(producto.product.brand)
                setArrayOfBrands(arrayBrands)
            }
        })
    }

    const filterProd = () => {
        let productos = props.Productos
        if (selectedColor !== undefined) {
            productos = productos.filter(prod => prod.product.color === selectedColor)
        }
        if (selectedBrand !== undefined) {
            productos = productos.filter(prod => prod.product.brand === selectedBrand)
        }
        if (minPrice) {
            productos = productos.filter(prod => prod.product.price >= minPrice)
        }
        if (maxPrice) {
            productos = productos.filter(prod => prod.product.price <= maxPrice)
        }

        return productos

    }
    const changeMinPrice = (e) => {
        const nuevoValor = parseInt(e.target.value)

        if (nuevoValor !== NaN) {
            setminPrice(nuevoValor)
        } else {
            setminPrice(0)
        }
    }
    const changeMaxPrice = (e) => {
        const nuevoValor = parseInt(e.target.value)
        if (nuevoValor !== NaN) {
            setmaxPrice(nuevoValor)
        } else {
            setmaxPrice(0)
        }
    }
    useEffect(() => {
        GetFilterOptions()
    }, [props.Productos])

    const setFilteredProducts = () => {
        props.setFilteredProductos(filterProd())

    }
    if (context.Orientation === 'portrait-primary' || context.Orientation === 'portrait-secondary') {
        if (props.operFilters) {
            return (
                <div id='FiltersModal' style={{ width: '100vw', boxShadow: '0px 0px 10px grey', position: 'absolute', bottom: '0', backgroundColor: '#bab8b6', borderTopLeftRadius: '5vw', borderTopRightRadius: '5vw', paddingInline: '3%' }}>
                    <h3>Filtros</h3>
                    <h5>Colores</h5>
                    <div id="FilterColors" className='FilterOptions '>
                        {
                            ArrayOfColours.map((Color, index) => {
                                return (
                                    <button className='FilterOption' key={index} onClick={() => {
                                        setselectedColor(selectedColor === Color ? undefined : Color)
                                    }} style={{ marginInline: '1%', backgroundColor: selectedColor === Color ? 'rgb(199, 199, 199)' : '#252324', color: selectedColor === Color ? '#252324' : 'rgb(199, 199, 199)', padding: '1%' }}>{Color}</button>
                                )
                            })
                        }
                    </div>

                    <h5>Marcas</h5>
                    <div id="FilterBrands" className='FilterOptions'>

                        {
                            ArrayOfBrands.map((Brand, index) => {
                                return (
                                    <button key={index} onClick={() => {
                                        setselectedBrand(selectedBrand === Brand ? undefined : Brand)
                                    }} style={{ marginInline: '1%', backgroundColor: selectedBrand === Brand ? 'rgb(199, 199, 199)' : '#252324', color: selectedBrand === Brand ? '#252324' : 'rgb(199, 199, 199)', padding: '1%' }}>{Brand}</button>
                                )
                            })
                        }
                    </div>
                    <h5>Precio:</h5>
                    <div id="PriceFilter">
                        <p>Desde {'(USD)'}:</p>
                        <input type="text" value={minPrice} placeholder='0' onChange={changeMinPrice} />
                        <p>Hasta {'(USD)'}:</p>
                        <input type="text" value={maxPrice} placeholder='1000000' onChange={changeMaxPrice} />
                    </div>
                    <button
                        id='FilterButton'
                        onClick={() => {
                            setFilteredProducts()
                            props.setoperFilters(false)
                        }}>Filtrar</button>
                </div>
            )
        }
    }else{
        return(
            <div style={{width:"20vw", height:"100vh", paddingTop:"8%", paddingLeft:"1%", overflow:"scroll", scrollbarColor: "transparent transparent"}}>
                    <h5>Colores</h5>
                    <div id="FilterColors" className='FilterOptions '>
                        {
                            ArrayOfColours.map((Color, index) => {
                                return (
                                    <button className='FilterOption' key={index} onClick={() => {
                                        setselectedColor(selectedColor === Color ? undefined : Color)
                                    }} style={{ width:"28%", marginInline: '2%', backgroundColor: selectedColor === Color ? 'rgb(199, 199, 199)' : '#252324', color: selectedColor === Color ? '#252324' : 'rgb(199, 199, 199)', padding: '2%' }}>{Color}</button>
                                )
                            })
                        }
                    </div>

                    <h5>Marcas</h5>
                    <div id="FilterBrands" className='FilterOptions'>

                        {
                            ArrayOfBrands.map((Brand, index) => {
                                return (
                                    <button key={index} onClick={() => {
                                        setselectedBrand(selectedBrand === Brand ? undefined : Brand)
                                    }} style={{ width:"28%", marginInline: '2%', backgroundColor: selectedBrand === Brand ? 'rgb(199, 199, 199)' : '#252324', color: selectedBrand === Brand ? '#252324' : 'rgb(199, 199, 199)', padding: '2%' }}>{Brand}</button>
                                )
                            })
                        }
                    </div>
                    <h5>Precio:</h5>
                    <div id="PriceFilter">
                        <p>Desde {'(USD)'}:</p>
                        <input type="text" value={minPrice} placeholder='0' onChange={changeMinPrice} />
                        <p>Hasta {'(USD)'}:</p>
                        <input type="text" value={maxPrice} placeholder='1000000' onChange={changeMaxPrice} />
                    </div>
                    <button
                        id='FilterButton'
                        onClick={() => {
                            setFilteredProducts()
                            props.setoperFilters(false)
                        }}>Filtrar</button>
            </div>
        )
    }




}

export default React.memo(ClassFilters);