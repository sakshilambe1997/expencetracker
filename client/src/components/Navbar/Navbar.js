import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"
import logoImg from "./logo-1.png"
import toast,{Toaster} from 'react-hot-toast'

function Navbar() {
  return (
    <>
    <div className='navbar-container'>
     <div className='navbar-logo-container'>
      <img src={logoImg} className='navbar-logo'/>
     </div>
     <div className='navbar-menu-container'>
      <Link to="/"  className='navbar-menu'>Home</Link>
      <Link to='/login' className='navbar-menu'>Login</Link>
      <Link to='/add-transaction' className='navbar-menu'>Add Transaction</Link>
      <Link to='/about' className='navbar-menu'>About</Link>
      <Link to='/Privacy' className='navbar-menu'>Privacy</Link>
      <span
        className="navbar-menu"
        onClick={() => {
          localStorage.clear();
          toast.success("Logout Successfully!!");
          setTimeout(() => {
            window.location.href = "/login";
          }, 3000);
        }}
      >
        Logout
      </span>
     </div>

     <Toaster/>

     </div>
    </>
   
  )
}

export default Navbar