import React from 'react'

const MenuOption = ({item, onSelect, fontPixel, Orientation}) => {
  return (
    <button onClick={()=>{onSelect(item)}} style={{fontSize: Orientation==='Portrait' ? fontPixel*1.1 : fontPixel*0.4}}>
        <p>{item}</p>
    </button>
  )
}

export default MenuOption