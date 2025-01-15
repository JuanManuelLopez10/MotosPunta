import React, { useState } from 'react'

const Benefits = (props) => {
    const producto = props.producto
    const [BenefitSelected, setBenefitSelected] = useState(0)
  
   return (
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active w-100 align-content-center">
        <div id='BenefitContain'>
            <div id='BenefitContainDiv' style={{backgroundImage: `url(${producto.Benefits[0].Image})`}} class="w-50">
                            <div>
                                <p id='BenefitContainDivTitle'>{producto.Benefits[0].Title}</p>
                                <p id='BenefitContainDivDescription'>{producto.Benefits[0].Description}</p>
                            </div>
                        </div>

        </div>
    </div>
    {
        producto.Benefits.map((benefit, index)=>{
            if(benefit!==producto.Benefits[0]){
                return(
                    <div class="carousel-item w-100 align-content-center">
                      <div id='BenefitContain'>    
                        <div id='BenefitContainDiv' style={{backgroundImage: `url(${benefit.Image})`}} class="w-50">
                            <div>
                                <p id='BenefitContainDivTitle'>{benefit.Title}</p>
                                <p id='BenefitContainDivDescription'>{benefit.Description}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            }
        })
    }
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" id='BotonPrevio' role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  )
}

export default Benefits