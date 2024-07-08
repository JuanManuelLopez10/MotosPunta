import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const ClassFilterPrice = (props) => {
    const context = useContext(CartContext)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000000)
    return(
        <div id='ClassFilterPrice'>
            <p id="ClassFilterPrice-Title">Precio U$S:</p>
            <div id="ClassFilterPrice-Container">
                <div>
                    <p>Min.</p>
                    <input value={minPrice} onChange={(a)=>{setMinPrice(a.target.value)}} type="text" placeholder='0'/>
                </div>
                <p>-</p>
                <div>
                    <p>Máx.</p>
                    <input value={maxPrice} onChange={(a)=>{setMaxPrice(a.target.value)}}  type="text" placeholder='0'/>
                </div>
            </div>
            <button onClick={() => context.filterPrice(maxPrice, minPrice)}>Filtrar</button>
        </div>
    )
}

export default ClassFilterPrice