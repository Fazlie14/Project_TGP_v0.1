import React from 'react'
import { BrowserRouter, Route,Routes, Link} from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/superAdmin/Dashboard'
import DashboardLayout from './layouts/DashboardLayout'
import Member from './pages/member/Member'
function App() {
  return (
    
 
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<DashboardLayout/>}>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path='/member' element={<Member/>}/>

  </Route>
</Routes>

</BrowserRouter>
 
</>

   
    
    
 
    
   
  )
}

export default App