
import React from 'react'
import Cards from '../../component/common/Cards'

function Dashboard() {
  return (
    <>
      <div className="stats shadow grid grid-flow-col grid-rows-2 gap-4 border-2 border-cyan-950 ">

      <Cards name='Member' data='1k'/>
      <Cards name='Chapter' data='60'/>
      <Cards name='New Survive' data='50'/>
      <Cards name='GrandTriskelion' data='50'/>
    
      </div>



   
   


    </>
  )
}

export default Dashboard