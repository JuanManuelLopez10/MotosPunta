import React from 'react'

const ModalTextArea = (props) => {
  return (
    <div>
        <p style={{fontSize: props.context.fontPixel}}>{props.Titulo}</p>
        <textarea value={props.value} n onChange={props.handleChange} name="Opcion" id={props.Titulo} cols="30" rows="1" placeholder='Escriba aquí' ></textarea>
    </div>
  )
}

export default ModalTextArea