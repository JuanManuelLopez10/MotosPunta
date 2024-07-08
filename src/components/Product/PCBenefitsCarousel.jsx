import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const PCBenefitsCarousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const context = useContext(CartContext)
    const arrayOfBeneftis = items.filter(i=>i.Title!==undefined)
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    const getClassName = (index) => {
        if (index === currentIndex) return 'carousel-slide carousel-slide-active';
        if (index === (currentIndex - 1 + items.length) % items.length) return 'carousel-slide carousel-slide-prev';
        if (index === (currentIndex + 1) % items.length) return 'carousel-slide carousel-slide-next';
        return 'carousel-slide carousel-slide-hidden';
      };
    
      return (
        <div className="carousel">
          <button className="carousel-button" disabled={currentIndex===0?true:false} onClick={prevSlide}>Prev</button>
          <div className="carousel-slides">
            {arrayOfBeneftis.map((item, index) => {
                if (item.Title!==undefined) {
                    return(
                        <div key={index} className={getClassName(index)}>
                          <img src={item.Image} alt="" />
                          <p style={{fontSize:context.fontPixel*.4}} className="BenefitTitle">{item.Title}</p>
                          <p className="BenefitDescription">{item.Description}</p>
                        </div>
                      )  
                }

            })}
          </div>
          <button className="carousel-button" disabled={currentIndex===arrayOfBeneftis.length-1?true:false} onClick={nextSlide}>Next</button>
        </div>
      )
  };
  
  export default PCBenefitsCarousel;