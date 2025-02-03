import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const ThirdCarousel = ({setproducto ,producto, options, carouselPart}) => {
    const context = useContext(CartContext)
    
    // if (carouselPart===2 && options.length>1) {
      if (options.length>1) {
        return(
            <div style={{width:"100vw", height:"90%", paddingBottom:"10vh",overflow:"scroll", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
              {
                options.map((option, index)=>{
                  return(
                    <button onClick={()=>{
                      setproducto(option)
                    }} style={{background:"none", border:"none"}}>
                      <img src={option.product.imageLink} style={{width:"30vw", height:"fit-content"}} alt="" />
                    </button>
                  )
                })
              }
            </div>
          )        
    }else{
      <div style={{width:"100vw", height:"10vh%", paddingBottom:"10vh",overflow:"scroll", display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
        <p> </p>
      </div>
    }

}
export default ThirdCarousel