import React from 'react'
import Input from '../common/Input'

function CreateAdminModal({className, name}) {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className={className} onClick={()=>document.getElementById('my_modal_3').showModal()}>{name}</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box  w-11/12 max-w-2xl">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    {/*Form for create admin*/}
    <form>
      <h1 className='text-md text-center mb-2'>Admin Management</h1>
    <Input  type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minLength="3"
    maxLength="30"
    title="Only letters, numbers or dash" 
    className='input input-info block mb-2 w-full'/>
     <Input  type="password"
    required
    placeholder="Password"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minLength="3"
    maxLength="30"
    title="Only letters, numbers or dash" 
    className='input input-info block mb-2 w-full'/>
    <button className="btn btn-md btn-info " type='submit'>Create</button>
    </form>
    
  </div>
</dialog>
    </div>
  )
}

export default CreateAdminModal