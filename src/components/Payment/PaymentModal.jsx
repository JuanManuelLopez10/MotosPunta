import React, { useState } from 'react'
import PaymentFirst from './PaymentFirst'

const PaymentModal = (props) => {
    const [Screen, setScreen] = useState('First')
    const arrayOfOptions = ['Financiación', 'Transferencia', 'Tarjeta de crédito/débito' ]
    if(props.OpenPayment===true){
        return (
            <>
            <div id="BackPaymentModal">
        
            </div>
            <div id="PaymentModal">
                <PaymentFirst Screen={Screen} setScreen={setScreen} setOpenPayment={props.setOpenPayment} arrayOfOptions={arrayOfOptions} />
            </div>    
            </>
          )
    }

}

export default PaymentModal