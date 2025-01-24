import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const SecondCarousel = ({producto, carouselPart}) => {
    const context = useContext(CartContext)
    // if (carouselPart===1) {
        return(
            <div style={{width:"100vw", height:"90%",display:"flex", flexDirection:"column", justifyContent:"center"}}>
              {
                producto.product.productType==="motos"
              ?  <img src={producto.product.imageLink} style={{width:"90%", marginTop:"-10vh",paddingLeft:"5%"}} alt="" />
              : ""
              }
              <p style={{width:"90%", marginTop:"-10%", paddingLeft:"5%", fontSize:context.fontPixel*.6}} >{producto.product.description}</p>
            </div>
          )        
    // }

}
export default SecondCarousel