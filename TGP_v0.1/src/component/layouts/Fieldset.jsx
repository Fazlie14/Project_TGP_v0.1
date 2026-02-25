import React from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
function Fieldset({title}) {
  return (
   <>
   <form className="fieldset w-full p-4 ">
   <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-full border p-5" >
    <legend className="fieldset-legend text-2xl text-center">{title}</legend>
    <Input className="input input-primary w-full mt-2 mb-2" type="email" placeholder="Enter Email"/>
    <Input className="input input-primary w-full mt-2 mb-2" type="password" placeholder="Enter Password"/>
    <Button text="Login" className="btn btn-primary"/>
  
      </fieldset>
    </form>
   </>
  )
}

export default Fieldset