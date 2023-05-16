import React, { useState } from 'react'
import CreateProductInput from '../components/index/CreateProductInput'

const CrearArticulo = () => {
    const [product, setProduct] = useState({})
    
    return (
    <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <CreateProductInput/>        
    </div>
    )
}

export default CrearArticulo