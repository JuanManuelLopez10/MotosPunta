import React from 'react'

const ProductOptions = (props) => {
    console.log(props.producto);
  return (
    <section id='ProductOptions'>
        {
            props.producto.Options.map(option => {
                return(
                    <button onClick={()=>{props.setSelectedOption(option)}} className='ProductOption' key={option.id}>
                        <img src={option.Image} alt="" />
                    </button>
                )
            })
        }
    </section>
  )
}

export default ProductOptions