import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ClassFiltersOptions from './ClassFiltersOptions'
import ClassFilterPrice from './ClassFiltersPrice'

const ClassFilters = (props) => {
    const context = useContext(CartContext)
    

    const arrayBrands = ['Marcas']
    const arrayCilind = ['Cilindrada']
    context.Datos.map(producto=>{
        if (producto.product) {
            if (producto.product.Type===props.Clase) {
                if (arrayBrands.findIndex(Brand => Brand===producto.product.Brand)===-1) {
                    arrayBrands.push(producto.product.Brand)
                }
                if (arrayCilind.findIndex(Brand => Brand===producto.product.Cilind)===-1) {
                    arrayCilind.push(producto.product.Cilind)
                }
    
            }
      
        }

    })
    
    return(
        <div id="ClassFilters">
            <h3 style={{fontSize:context.fontPixel*.48}}>Filtros</h3>
            <div id='ClassFiltersBody'>
                <ClassFiltersOptions Array={arrayBrands} mainSelect={context.BrandFilters} accion={context.HandleChangeBrand}/>
                {
                    props.ArrayOfMotosTypes.findIndex(a=>a===props.Clase)!==-1
                    ?
                    <ClassFiltersOptions Array={arrayCilind} mainSelect={context.CilindFilters} accion={context.HandleChangeCilind}/>
                    :''
                }
                <ClassFilterPrice/>
            </div>
            
        </div>
    )
}

export default ClassFilters