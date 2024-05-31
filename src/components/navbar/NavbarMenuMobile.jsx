import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const NavbarMenuMobile = (props) => {
    const context = useContext(CartContext)
    const [SelectedClass, setSelectedClass] = useState(undefined)

    const arrayTypes = []
    const arrayClases = []

    const selectClass = (clase) => {
        setSelectedClass(clase)
        context.setMenuSelectedClass(clase)
    }

    if (context.Datos.length > 0) {
        context.Datos.map(product => {
            const producto = product.product
            if(producto.Class){
            if(arrayTypes.findIndex(Class => Class.nombre === producto.Type)===-1){
                const objeto = {
                    nombre: producto.Type,
                    Class: producto.Class,
                    image: producto.Options[0].Image
                }
                arrayTypes.push(objeto)
            }
            if(arrayClases.findIndex(clase => clase === producto.Class)===-1){
                arrayClases.push(producto.Class)
            }
            }
        })
    
    }

    return (
        <>

                <button onClick={()=>{setSelectedClass(undefined)}} className={SelectedClass!==undefined ? 'MenuMobileGoBackOpen' : 'MenuMobileGoBackClosed' }  id='MenuMobileGoBack'>
                    <p style={{fontSize: context.fontPixel*1.3}}>
                        {'<'}
                    </p>
                </button>

            <div id='MenuMobile' className={props.OpenMenu===true ? 'MenuMobileOpened' : 'MenuMobileClosed'}>

<div id='MenuMobileClass' className={props.OpenMenu===true && SelectedClass===undefined ? 'MenuMobileClassOpen' : 'MenuMobileClassClosed'} >
{
    arrayClases.map(clase => {
        return (
            <button onClick={()=>{selectClass(clase)}} className={props.OpenMenu===true && SelectedClass===undefined ? 'MenuOption MenuOptionOpen' : 'MenuOption MenuOptionClosed'}>
            <p>{clase.toUpperCase()}</p>
                </button>
        )
    })
}
</div>
{
    arrayClases.map(clase => {
        return(
            
    <div id='MenuMobileType' className={props.OpenMenu===true && SelectedClass===clase ? 'MenuMobileClassOpen' : 'h-0 MenuMobileClassClosed'} >

{        arrayTypes.map(tipo => {
            if(tipo.Class===clase){
                return (
                    <Link onClick={()=>{props.setOpenMenu(false)
                     setSelectedClass(undefined)
                     context.setScreen('Clase')
                     }} to={`/clase/${tipo.nombre}`} className='MenuOption'>
                        <p>{tipo.nombre.toUpperCase()}</p>
                    </Link>
            )
            }
        })}
    </div>

)

    })
}
</div>

        </>
  )
}

export default NavbarMenuMobile