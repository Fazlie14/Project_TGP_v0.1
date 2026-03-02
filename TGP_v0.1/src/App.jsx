import React from 'react'
import { BrowserRouter, Route,Routes, Link} from 'react-router-dom'
import Login from './pages/auth/Login'
import Dashboard from './pages/superAdmin/Dashboard'
import DashboardLayout from './layouts/DashboardLayout'
import Admins from './pages/superAdmin/Admins'


function App() {
  return (
 
<>
<BrowserRouter>

<Routes>
  <Route path='/' element={<Login/>}/>

  <Route path='/dashboard' element={<DashboardLayout/>}>
    
    <Route index element={<Dashboard/>}/>
    
    <Route path='admin' element={<Admins/>}/>
    

  </Route>
 
</Routes>

</BrowserRouter>
 
</>

   
    
    
 
    
   
  )
}

export default App