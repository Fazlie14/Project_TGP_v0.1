import React from 'react'
import Cards from '../../component/common/Cards'
function Admin() {
  return (
    <div className='stats shadow grid grid-flow-col grid-row-2 gap-4 border-2 border-blue-950'>

      <Cards name='Pending Approve' data='150'/>
      <Cards name='Approve' data='200'/>
    


    </div>
  )
}

export default Admin