import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const ProductBenefitModal = (props) => {
    const context = useContext(CartContext)
    if(props.BenefitSelected!==undefined){
        console.log(props.BenefitSelected);
        return (
            <>
            <div id="BackProductBenefitModal">
                .
            </div>
            <div id='ProductBenefitModal'>
                <div id="ImageAndExit">
                    <button id="ExitButton" onClick={()=>{props.setBenefitSelected(undefined)}}>X</button>
                    <img src={props.BenefitSelected.Image}/>
                    <p style={{fontSize: context.fontPixel*1.7}} id='BenefitTitle'>{props.BenefitSelected.Title}</p>
                    <p style={{fontSize: context.fontPixel*1}} id='BenefitDescription'>{props.BenefitSelected.Description}</p>
                </div>
                
            </div>
        
            </>
          )
    }

}

export default ProductBenefitModal