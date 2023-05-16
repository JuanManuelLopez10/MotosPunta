import React from 'react'

const CreateProductInput = ({prope}) => {
    const a = (ab) => {
        console.log('jajajajaja ', ab);
    }
  return (
    <div>
        <input type="text" onChange={a}/>
    </div>
  )
}

export default CreateProductInput