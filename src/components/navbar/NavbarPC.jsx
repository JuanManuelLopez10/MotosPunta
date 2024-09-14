import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import TypesMenu from './TypesMenu'
import { Link } from 'react-router-dom'

const NavbarPC = () => {
    const context = useContext(CartContext)
    const [arrayTypes, setarrayTypes] = useState([])
    const arrayClases = []
    const getProducts = async () => {
        const ProductosCollection = collection(db, "Productos");
        const motosSnapshot = await getDocs(ProductosCollection);
        const Datos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}))
    
    }
    if (arrayTypes.length < 1) {
        
        context.Datos.map(product => {
            const producto = product.product
            if(producto.Class){
            if(arrayTypes.findIndex(Class => Class.nombre === producto.Type)===-1){
                const objeto = {
                    nombre: producto.Type,
                    Class: producto.Class,
                    image: producto.Options[0].Image
                }
                arrayTypes.push(objeto)
            }
            if(arrayClases.findIndex(clase => clase === producto.Class)===-1){
                arrayClases.push(producto.Class)
            }
            }
        })
    
    }
    const [Selected, setSelected] = useState(null)
    const HandleSelect = (a) => {
        Selected===a
        ?
        setSelected(null)
        :
        setSelected(a)

    }
    
    const handleCloseMenu = () => {
        setSelected(null)
    }

        return (
            <div id='Navbar' >
                {
                    Selected!==null &&
                    <TypesMenu Selected={Selected} handleCloseMenu={handleCloseMenu} arrayTypes={arrayTypes}/>
                }
                <Link to='/' id='NavbarLogoPC' className='trapecio'>
                    <img id='NavbarLogoPCImg' src={'https://iili.io/JN7aeiG.png'} alt=""/>
                </Link>
                {
                    arrayClases.length>0
                    ?
                    arrayClases.map(clase => {
                        return (
                            <button className='NavbarOption' onClick={()=>{HandleSelect(clase)}}>
                                {clase.toUpperCase()}
                                
                            </button>
                        )
                    })
                    :''
                }
            </div>
          )

}

export default NavbarPC