import React from 'react'
import Navbar from '../component/common/Navbar'
import Sidebar from '../component/common/Sidebar'
import Dashboard from '../pages/superAdmin/Dashboard'
import Admin from '../pages/admin/Admin'
function DashboardLayout() {
  return (
    <div className='drawer lg:drawer-open'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
     
      <div className="drawer-content flex flex-col">
    <Navbar />     
          {/* Navbar can have label pointing to the input */}
    <main className="flex-1 p-6">
      {/* <Outlet />   Pages render here */}
    {/* <Dashboard/> */}
    <Admin/>

    </main>
  </div>

  {/* Sidebar */}
  <div className="drawer-side">
     <label htmlFor="my-drawer-4" className="drawer-overlay"></label> 
    <Sidebar />          {/* Only the menu list here */}
  </div>
    </div>
  )
}

export default DashboardLayout