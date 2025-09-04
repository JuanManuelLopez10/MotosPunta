import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const WhiteBack = () => {
    const context = useContext(CartContext)
    if (context.Section==='HotProducts' && context.Presection==='Wallpaper') {
        return (
            <div id="whiteBack">

            </div>
        )
    }else if(context.Section==='IndexBrands'){
        return (
            <div id="whiteBackBrands">

            </div>
        )
    }else if(context.Section==='HotProducts' && context.Presection==='IndexBrands'){
        return (
            <div id="whiteBackHotProducts">

            </div>
        )
    }else{
        return (
            <div id="whiteBackClose">

            </div>
        )
    }
    

}

export default WhiteBack