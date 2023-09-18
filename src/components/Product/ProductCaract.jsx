import React, { useContext } from 'react'
import PhoneButtonsProduct from './PhoneButtonsProduct';

const ProductCaract = (props) => {
  if (props.producto) {
    console.log(props.producto.Benefits);
    return (
      <div id='ProductCaract'>
          <h2>Características</h2>
          <div id='BenefitsContainer' style={{overflowX:props.context.Orientation==='Portrait' ? 'scroll' : 'hidden' }}>
          {
              props.producto.Benefits.map(beneficio=>{
                  return(
                  <div key={beneficio.Name} className='Beneficio col-lg-3 col-5'>
                      <img src={beneficio.Image} alt="" />
                      <p>{beneficio.Name}</p>
                  </div>)
              })
          }
          </div>
          {
            props.context.Orientation==='Portrait'
            ?
            <PhoneButtonsProduct HandleModal={props.HandleModal} seleccionado={props.seleccionado} producto={props.producto} context={props.context}/>
            :''
          }
      </div>
    )
  }

}

export default ProductCaract