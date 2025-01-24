import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const ThirdCarousel = ({producto, options, carouselPart}) => {
    const context = useContext(CartContext)
    // if (carouselPart===2 && options.length>1) {
      if (options.length>1) {
        return(
            <div style={{width:"100vw", height:"90%", overflow:"scroll", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
              {
                options.map((option, index)=>{
                  return(
                    <img src={option.product.imageLink} style={{width:"30vw", height:"fit-content"}} alt="" />
                  )
                })
              }
            </div>
          )        
    }

}
export default ThirdCarousel