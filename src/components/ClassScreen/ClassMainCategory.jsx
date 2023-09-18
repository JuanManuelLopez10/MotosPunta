import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const ClassMainCategory = (props) => {
    const context = useContext(CartContext)
    
    const [principal, setPrincipal] = useState(0)

    let productos = []
    const getProducts = () => {
      props.datos.map(item=>{
        if (item.category===context.SelectedCategory) {
         productos.push(item) 
        }
      })
    }
    getProducts()

    const width = window.innerWidth

    const MainCategoryRow = document.querySelector('.MainCategoryRow')
    const [ScrollPosition, setScrollPosition] = useState(0)
    if (MainCategoryRow!==null) {
      MainCategoryRow.addEventListener('scroll', (e)=>{
        if(productos.length>2){
          if (MainCategoryRow.scrollLeft<width*.2) {
            setPrincipal(0)
          }else{
            const numeroConDecimales = (MainCategoryRow.scrollLeft/width + .3) / 0.53 
            const numeroEntero = Math.floor(numeroConDecimales)
            setPrincipal(numeroEntero)  
          }
      }else{
          if (MainCategoryRow.scrollLeft>=20 && MainCategoryRow.scrollLeft<317) {
            setPrincipal(1)
          }
        }
        
  
  
      })
    }


    if (context.Orientation==='Portrait') {
      return (
        <div className='MainCategory'>
            <h2>{context.SelectedCategory}</h2>
            <div className='MainCategoryRow' onScroll={(e)=>{e.preventDefault()}}>
                {
                    props.datos.map(item=>{
                        if (item.category===context.SelectedCategory) {
                          const posicionEnArray = productos.indexOf(item)
                            return(
                                <Link to={`/product/${item.id}`} className={posicionEnArray===principal ? 'MainCategoryCard MainCategoryCardPrincipal col-5 col-md-2 m-4' : 'MainCategoryCard col-5 col-md-2 m-4'}  style={{alignItems:item.Clase==='Motos' ? 'flex-end' : 'center' ,backgroundImage: `linear-gradient(-50deg, ${item.options[0].color}, #262626)`}}>
                                    <img src={`${item.options[0].image}`} style={{width:item.Clase==='Motos'? '250%' : '110%', marginTop:item.Clase==='Motos'? '-50%' : '10%'}} alt="" />      
                                    <div className='MainCategoryCardText'>
                                        <p style={{fontSize: context.Orientation==='Portrait' ? context.fontPixel : context.fontPixel*.3}} >{item.brand + ' ' + item.model}</p>
                                        <p>{'U$S ' + item.price}</p>
                                    </div>
                                </Link>
                            )
                          }
                    })
                  }
              </div>    
            </div>    
      )
}
}
export default ClassMainCategory