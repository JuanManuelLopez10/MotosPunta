import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const FirstCarousel = ({producto, all_sizes, setSelectedSize, selectedSize, carouselPart}) => {
    const context = useContext(CartContext)
    // if (carouselPart===0) {
        return(
            <div style={{ width:"100vw", height:"90%", display:"flex", justifyContent:"center"}}>
            <div style={producto.product.productType==="motos" ?{width:"160%", marginLeft:"-65%",marginRight: "-12%", marginTop:"-20%"} 
            : {width : "80vw", marginLeft: "0vw",  marginTop: "0vw", height:"fit-content", display:"flex", flexDirection:"column"}}>
            <img src={producto.product.imageLink} alt="" 
            style={producto.product.productType==="motos" ? {width: "160vw", height:"fit-content", marginBottom:"-10vh"} 
            : {width : "80vw", marginLeft: "0vw",  marginTop: "0vw", height:"fit-content" }
            }/>
            <p style={{paddingLeft:"5%"}} >Talles:</p>
            <div style={{display:"flex", width:"80%", height:"20%", marginBottom:all_sizes.findIndex(siz => siz.aviable===true)!==-1 ? "20vh" : "0px"}}>
            {
              producto.product.productType!=="motos"
              ?
              all_sizes.map((size, index)=>{
                if (size.aviable) {
                  return(
                    <button onClick={()=>{setSelectedSize(index)}} id={index} style={{marginLeft:"10%", borderRadius:"50vw", border:selectedSize===index ? "solid 1px red" : "none", boxShadow:"0px 0px 10px black", backgroundColor:"rgb(155, 155, 155)", fontSize:context.fontPixel}}>{size.size.toUpperCase()}</button>
                  )
                }
        
              })
              :""
            }     
            </div>        
                       
            </div>
        
            <p style={{width:"100vh", fontWeight:"800", marginRight:"-20vw" ,transform:"rotate(90deg)", maxHeight:"10vw", maxWidth:"100vw", marginTop:"30vh", textAlign:"end", fontSize:context.fontPixel*5}}>{producto.product.brand.toUpperCase()}</p>
          </div>
          )        
    // }

}
export default FirstCarousel