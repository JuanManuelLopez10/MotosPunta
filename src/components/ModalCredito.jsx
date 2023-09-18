import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import ModalTextArea from './Modal/ModalTextArea'
import { Alert } from 'bootstrap'

const ModalCredito = (props) => {
    const context = useContext(CartContext)

    const [Sueldo, setSueldo] = useState(0)
    const [Antiguedad, setAntiguedad] = useState(0)
    const [Clearing, setClearing] = useState(false)
    const [Telefono, setTelefono] = useState(0)
    const [Puede, setPuede] = useState(undefined)
    const probarSiPuede = () => {
        if (Sueldo >= props.MontoAFinanciar / 1000 * 22 && Antiguedad>= 12 && Clearing===true) {
            setPuede(true)
        }else if(Antiguedad>= 6 && Sueldo >= props.MontoAFinanciar / 1000 * 36 && Clearing===true){
            setPuede(true)
        }else{
            setPuede(false)
        }
    }


    const HandleAntiguedad = (e) => {
        setAntiguedad(e.target.value)
    }
    const HandleSueldo = (e) => {
        setSueldo(e.target.value)
    }
    const HandleClearing = () => {
        setClearing(!Clearing)
    }
    const HandleTelefono = (e) => {
        setTelefono(e.target.value)
    }
    return (
    <div id='ModalCredito'>
        <div id='ModalCredito_Header'>
            <p style={{fontSize: context.fontPixel*1.15}} >Total a financiar: U$S {props.MontoAFinanciar}</p>
        <button onClick={()=>{
            props.HandleModal()
        }}>X</button>
        </div>
        <div id='ModalCredito_Body'>
            <ModalTextArea context={context} Titulo={'Antigüedad laboral (meses):'} value={Antiguedad} handleChange={HandleAntiguedad} />
            <ModalTextArea context={context} Titulo={'Sueldo líquido aprox.:'} value={Sueldo} handleChange={HandleSueldo} />
                <label >
                <input type="checkbox" checked={Clearing} onChange={HandleClearing}/>
                    No estoy en el clearing
                </label>
            <ModalTextArea context={context} Titulo={'Teléfono de contacto:'} value={Telefono} handleChange={HandleTelefono} />
        </div>
        <div id='ModalCredito_Footer'>
            <button onClick={()=>{props.HandleModal() }} style={{width: '40%', marginInline: 0}} className='BotonesProductoWallpaper' id='BotonModalSalir' >Salir</button>                                
            {
                Puede===undefined
                ?
                <button onClick={()=>{probarSiPuede()}} style={{width: '40%', marginInline: 0}} className='BotonesProductoWallpaper' id='BotonModalTramitar'>Consultar</button>                                
                :
                <button onClick={()=>{probarSiPuede()}} style={{width: '40%', marginInline: 0}} className='BotonesProductoWallpaper' id='BotonModalTramitar'>{Puede===true ? 'Tramitar' : 'Consultar'}</button>
                }                            
        </div>
        {
                Puede===false
                ?
                <div id='AlertNoPuede'>
                    <button onClick={()=>{setPuede(undefined)}}>X</button>
                    <p>No tienes créditos disponibles.</p>
                    <button onClick={()=>{setPuede(undefined)}} id='ButtonAceptar'>Aceptar</button>
                </div>
                :
                ''
            }

    </div>
  )
}

export default ModalCredito