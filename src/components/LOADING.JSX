import React, { useCallback, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const LoadingScreen = () => {
    const context = useContext(CartContext)
    context.AddImages()

    return (
    <div>LOADING</div>
  )
}

export default LoadingScreen