import React, { useCallback, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const LoadingScreen = () => {
    const context = useContext(CartContext)

    return (
    <div id='LoadingBack'>
      a
    </div>
  )
}

export default LoadingScreen