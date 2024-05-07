import React, { useState } from 'react'

const EditArticulo = (props) => {
  const [abierto, setAbierto] = useState(false)
  
  return (
    <div>
      <p className='EditArticulo'>
      {props.producto.product.Brand} {props.producto.product.Model} {props.producto.product.Cilind}
      </p>

    </div>
  )
}

export default EditArticulo