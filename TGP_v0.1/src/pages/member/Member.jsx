import React from 'react'
import Table from '../../component/common/Table'
function Member() {
  return (
    <div className='overflow-x-auto rounded-box border border-base-content/5 bg-base-10'>
      <Table name='Name' age='Age' chapter='Chapter' gt='Grand Triskelion'/>


    </div>
  )
}

export default Member