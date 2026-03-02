import React from 'react'
import Button from '../../component/common/Button'
import Table from '../../component/common/Table'
import SearchInput from '../../component/common/SearchInput'
import CreateAdminModal from '../../component/modal/CreateAdminModal'

function Admins() {
  return (
    <div className=''>
      <SearchInput/>
  
     
      <CreateAdminModal className='btn btn-neutral btn-md mt-2' name='Create Admin'/>
      <Table/>

    </div>
  )
}

export default Admins