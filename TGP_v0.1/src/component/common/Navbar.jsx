import React from 'react'
import zccLogo from "../../assets/images/ZCC.png";
import TGPLogo from "../../assets/images/TGP_logo.png";
import eastCoastLogo from "../../assets/images/TGP_eastCostLogo.png";

function Navbar() {
  return (
    <nav className="navbar w-full bg-base-300">
    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
      {/* Sidebar toggle icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
    </label>

    <div className="flex items-center justify-between px-4 gap-4">
      <div className='flex items-center justify-center gap-2 px-2'>
      
      <img src={TGPLogo} alt="Tau Gamma phi Logo"className='w-5'/>
      <img src={zccLogo} alt="Zamboanga City Council Logo"className='w-5'/>
      <img src={eastCoastLogo} alt="East Cost Logo"className='w-5'/>
      </div>
      
      <div className='flex items-center justify-center'>
        <h1 className='text-sm text-wrap'>Tau Gamma Phi - EastCost District</h1>
        
      </div>
      
      </div>
  </nav>
    
 
  )
  
}


export default Navbar