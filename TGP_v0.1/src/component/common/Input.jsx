import React from 'react'

function Input({type='text',placeholder,className}) {
  return (
   <>
     <input className={className} type={type}  placeholder={placeholder} />
     
   </>
  )
}

export default Input