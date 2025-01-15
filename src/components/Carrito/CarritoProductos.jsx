import React from 'react'

const CarritoProductos = (props) => {
    return(
    <div id='ContenedorCarritoProductos'>
    <div id='ContenedorCarritoProductos2'>
    {
        props.contexto.Carrito.map(item => {

            return (
                <div className='CarritoProducto' id={item.id}>
                    <img src={item.image} alt="" className='col-5' />
                    <div className='CarritoProductotexto'>
                        <h4>{item.brand} {item.model}</h4>
                        <div>
                            <p>U$S {item.price}    x{item.cantidad}</p>
                        </div>
                        <button onClick={() => { props.deleteProduct(item.id) }} >
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            )
        })
    }
    </div>
</div>
)
}

export default CarritoProductos