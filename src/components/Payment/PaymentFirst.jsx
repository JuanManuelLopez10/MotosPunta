import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import PaymentTransfer from './PaymentTransfer'

const PaymentFirst = (props) => {
    const context = useContext(CartContext)
    
  return (
    <div id='PaymentFirst'>
        <div id="PaymentFirstHeader">
            <p style={{fontSize:context.fontPixel*1.4}}>Métodos de pago</p>
            <button onClick={()=>{props.setOpenPayment(false)
                props.setScreen('First')
            }} style={{fontSize:context.fontPixel*1.4}}>
                X
            </button>
        </div>
        <div id="PaymentFirstBody">
                {
                    props.Screen==='First'?
                    props.arrayOfOptions.map(opttion => {
                        return(
                            <button style={{fontSize:context.fontPixel*1}} onClick={()=>{props.setScreen(opttion)}}>{opttion}</button>
                        )
                    }

                )
                :
                <PaymentTransfer setScreen={props.setScreen} Screen={props.Screen}/>
                }
        </div>
    </div>
  )
}

export default PaymentFirst