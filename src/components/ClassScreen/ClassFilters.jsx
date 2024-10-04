import React, { useContext, useEffect, useMemo, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ClassFilters = (props) => {
    
    const [ArrayOfColours, setArrayOfColours] = useState([])
    const [ArrayOfBrands, setArrayOfBrands] = useState([])
    const [selectedBrand, setselectedBrand] = useState(undefined)
    const [selectedColor, setselectedColor] = useState(undefined)
    const [minPrice, setminPrice] = useState(0)
    const [maxPrice, setmaxPrice] = useState(1000000)
    const GetFilterOptions = () => {
        const arrayBrands = []
        const arrayColors = []
        props.Productos.map(producto=>{
            producto.product.Options.map(Option => {
                if (!arrayColors.includes(Option.Color)) {
                    arrayColors.push(Option.Color)
                    setArrayOfColours(arrayColors)
                }               
            })
            
            if (!arrayBrands.includes(producto.product.Brand)) {
                arrayBrands.push(producto.product.Brand)     
                setArrayOfBrands(arrayBrands)           
            }
        })
    }

    const filterProd = () =>{
        if (selectedBrand !== undefined && selectedColor!== undefined){ 
        return props.Productos.filter(prod => prod.product.Options.some(obj => obj.Color ===selectedColor) && prod.product.Brand===selectedBrand)
        }else if (selectedBrand !== undefined && selectedColor!== undefined){
            
        }
    }
    const changeMinPrice = (e) => {
        const nuevoValor = parseInt(e.target.value)
        setminPrice(nuevoValor)
    }
    const changeMaxPrice = (e) => {
        const nuevoValor = parseInt(e.target.value)
        setmaxPrice(nuevoValor)
    }
    useEffect(()=>{
        GetFilterOptions()
    },[props.Productos])

    const setFilteredProducts = () => {
        props.setFilteredProductos(filterProd())
        
    }
    if (props.operFilters) {
        return(
              <div style={{width:'100vw', height:'60vh', position:'absolute', bottom:'0', backgroundColor:'#bab8b6', borderTopLeftRadius:'5vw', borderTopRightRadius:'5vw', paddingInline:'3%'}}>
                <h3>Filtros</h3>
                <h5>Colores</h5>
                {
                    ArrayOfColours.map((Color, index) => {
                        return (
                        <button key={index} onClick={()=>{
                            setselectedColor(Color)
                        }} style={{marginInline:'1%', padding:'1%'}}>{Color}</button>
                    )
                    })
                }
                <h5>Marcas</h5>
                {
                    ArrayOfBrands.map((Brand, index) => {
                        return (
                        <button key={index} onClick={()=>{
                            setselectedBrand(Brand)
                        }} style={{marginInline:'1%', padding:'1%'}}>{Brand}</button>
                    )
                    })
                }
                <h5>Precio:</h5>
                <div id="PriceFilter">
                    <p>Desde {'(USD)'}:</p>
                    <input type="text" value={minPrice} placeholder='0' onChange={changeMinPrice}/>
                    <p>Hasta {'(USD)'}:</p>
                    <input type="text" value={maxPrice} placeholder='1000000' onChange={changeMaxPrice}/>
                    <button onClick={()=>{setFilteredProducts()}}>Filtrar</button>
                </div>
              </div>
        )
    }


}

export default React.memo(ClassFilters);