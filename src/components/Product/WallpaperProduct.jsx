import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const WallpaperProduct = (props) => {
    const context = useContext(CartContext)
    let product = props.producto

    const [nombre, setNombre] = useState()
    const [seleccionado, setSeleccionado] = useState(0)
    const [previo, setPrevio] = useState()
    const [preprevio, setPreprevio] = useState()
    if (product !== undefined) {
        return (
            <div id='WallpaperProduct'>
                {
                    product.options.length > 1
                        ?
                        <>
                            <button id='PreviousButton' className='botonesWallpaperProduct' onClick={() => {
                                if (seleccionado > 0) {
                                    const nuevo = seleccionado - 1
                                    setPreprevio(seleccionado + 1)
                                    setPrevio(seleccionado)
                                    setSeleccionado(nuevo)
                                    props.seleccionar(nuevo)
                                }
                            }}>{'<'}
                            </button>

                            <button id='NextButton' className='botonesWallpaperProduct' onClick={() => {
                                if (product.options && seleccionado < product.options.length - 1) {
                                    const nuevo = seleccionado + 1
                                    setPrevio(seleccionado)
                                    setPreprevio(seleccionado - 1)
                                    setSeleccionado(nuevo)
                                    props.seleccionar(nuevo)
                                }
                            }}>{'>'}
                            </button></>
                        : ''
                }


                <div id='WallpaperProduct-ImageContainer'>
                    {
                        seleccionado < 2
                    }
                    <div id={`tadentro${seleccionado}`}>

                    </div>
                    {
                        product.options.map(opcion => {
                            const posicion = product.options.indexOf(opcion)
                            let es = undefined
                            let quees = undefined
                            if (seleccionado === posicion) {
                                es = 'Selected'
                            } else if (posicion === seleccionado + 1 || posicion === seleccionado - 1) {
                                es = 'NoSelected'
                            } else if (posicion === seleccionado + 2 || posicion === seleccionado - 2) {
                                es = 'NonoSelected'
                            }
                            if (posicion === previo) {
                                quees = 'Previo'
                            } else if (posicion === preprevio) {
                                quees = 'Preprevio'
                            } else if (es !== undefined && quees !== 'Previo' && quees !== 'Preprevio' && posicion === seleccionado - 1 || posicion === seleccionado + 1) {
                                quees = 'Post'
                            }
                            if (es) {
                                return (
                                    <img src={opcion.image} key={opcion.design + opcion.color} className={`imagen-${es}-${product.Clase} ${quees + '-' + product.Clase}`} alt="" />
                                )
                            }

                        })
                    }
                    {
                        seleccionado === product.options.length - 1
                            ?
                            <div className='col-4'>

                            </div>
                            : ''
                    }


                </div>
                {
                    context.Orientation === 'Portrait'
                        ?
                        <>
                            <h1 style={{ color: 'white' }}>
                                {product.brand + ' ' + product.model + ' '} {product.Clase === 'Cascos' ? product.options[seleccionado].design : ''}
                            </h1>
                            <h4 style={{ color: 'grey' }}>{product.description}</h4>
                            <h4 style={{ color: 'grey' }}>U$S {product.price}</h4>

                        </>
                        :
                        <div style={{ display: 'flex', width:'80vw',justifyContent:'space-around' }}>
                            <div style={{ width:'50%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                                <h1 style={{ color: 'white'}}>
                                    {product.brand + ' ' + product.model + ' '} {product.Clase === 'Cascos' ? product.options[seleccionado].design : ''}
                                </h1>
                                <h4 style={{ color: 'grey' }}>{product.description}</h4>
                                <h4 style={{ color: 'grey' }}>{product.money+product.price}</h4>
                            </div>
                            <div style={{ width:'30%', display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center'}}>
                                {
                                    product.Clase==='Motos'
                                    ?
                                <button onClick={()=>{props.HandleModal()}} className='BotonesProductoWallpaper' id='BotonesProductoWallpaperWp' ><i class="bi bi-whatsapp"></i>  Consulta financiación</button>                                
                                    :''
                                }
                                <button onClick={()=>{context.addToCart(product, product.options[seleccionado])}} className='BotonesProductoWallpaper' id='BotonesProductoWallpaperCarrito' >Agregar al carrito</button>                                
                            </div>
                        </div>
                }

            </div>
        )
    }

}

export default WallpaperProduct