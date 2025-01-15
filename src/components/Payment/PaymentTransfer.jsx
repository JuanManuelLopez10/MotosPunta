import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const PaymentTransfer = (props) => {
    const context = useContext(CartContext)
    if(props.Screen==='Financiación'){
    return (
        <>
        <p style={{fontSize: context.fontPixel*1}} >Ingresa tu teléfono y te contactaremos para comenzar la financiación</p>
        <input style={{fontSize:context.fontPixel*1.1}} type="number" placeholder='091091091' />
        <div id='ToFButtons'>
            <button onClick={()=>{props.setScreen('First')}} id='CancelButton'>Cancelar</button>
            <button id='AcceptButton'>Aceptar</button>
        </div>
        </>
  )
    }else if(props.Screen==='Transferencia'){
        return (
            <>
        <p style={{fontSize: context.fontPixel*1}} >Ingresa tu teléfono para que te pasemos los números de cuenta para transferir</p>
        <input style={{fontSize:context.fontPixel*1.1}} type="number" placeholder='091091091' />
            <div id='ToFButtons'>
                <button onClick={()=>{props.setScreen('First')}} id='CancelButton'>Cancelar</button>
                <button id='AcceptButton'>Aceptar</button>
            </div>
            </>
      )
    }else if(props.Screen==='Tarjeta de crédito/débito'){
        return (
            <>
        <p style={{fontSize: context.fontPixel*1}} >Se generará un link de pago que se te enviará a tu teléfono. Por favor ingresa tu número de celular</p>
        <input style={{fontSize:context.fontPixel*1.1}} type="number" placeholder='091091091' />
            <div id='ToFButtons'>
                <button onClick={()=>{props.setScreen('First')}} id='CancelButton'>Cancelar</button>
                <button id='AcceptButton'>Aceptar</button>
            </div>
            </>
      )
    }
}


export default PaymentTransfer