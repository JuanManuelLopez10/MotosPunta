import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

const IndexHotProducts = () => {
    const context = useContext(CartContext)
    const [Selected, setSelected] = useState()

    const arrayDestacados = []
    context.Datos.map(product=>{
        
        if (product.product.featured) {
            arrayDestacados.push(product.product)
            if(Selected===undefined){
                setSelected(product.product)
            }
        }
    })
    const ToNextHotProduct = (product) => {
        const inde = arrayDestacados.findIndex(p => p===product)
        if(inde===arrayDestacados.length-1){
            const next = arrayDestacados[0]
            setSelected(next)
        
        }else{
            const next = arrayDestacados[inde+1]
            setSelected(next)
        
        }
}
    const ToPreviousHotProduct = (product) => {
        const inde = arrayDestacados.findIndex(p => p===product)
        if (inde===0) {
            const next = arrayDestacados[arrayDestacados.length-1]
            setSelected(next)
        
        }else{
            const next = arrayDestacados[inde-1]
            setSelected(next)    
        }
    }

    if(Selected){
        console.log(arrayDestacados);
        return (
            <section id='IndexHotProductsPC' >
                <button onClick={()=>{ToPreviousHotProduct(Selected)}} className='Button'>{'<'}</button>
                    <h2 style={{fontSize: context.fontPixel*5}} >{Selected.Model.toUpperCase()}</h2>
                    <div id='imgContainer'>
                        <img style={{height:'90%'}} src={Selected.Options[0].Image} alt="" />
                    </div>
                <button onClick={()=>{ToNextHotProduct(Selected)}} className='Button'>{'>'}</button>
                <div id=''>

                </div>
            </section>
          )
    }

}

export default IndexHotProducts