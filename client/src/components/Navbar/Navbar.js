import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "./logo-1.png";
import toast, { Toaster } from "react-hot-toast";
import MenuImg from "./menu.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <img src={logoImg} className="navbar-logo" />

          <span className="nav-brand-name">Expence Tracker</span>
          
          <img src={MenuImg} className="nav-menu-img" onClick={toggleMenu}/>

          </div>
      

        {
          isMenuOpen ?

          <div className="menu-img-item-container">
            <Link to="/" className="menu-img-item">Home</Link>
            <Link to="/about" className="menu-img-item">Login</Link>
            <Link to="/transaction" className="menu-img-item">Transacton</Link>
            <Link to="/home" className="menu-img-item">Signup</Link>
            <span className="menu-img-item" onClick={()=>{
              localStorage.clear();
              toast.success("Logged out Successfully!!")

              setTimeout(()=>{
              window.location.href="/login";
              },2000);
            }}>Logout</span>

          </div> :

          null
        }

          <Link to="/" className="navbar-menu">
            Home
          </Link>
          <Link to="/login" className="navbar-menu">
            Login
          </Link>
          <Link to="/add-transaction" className="navbar-menu">
            Add Transaction
          </Link>
          <Link to="/signup" className="navbar-menu">
            Signup
          </Link>
          <Link to="/Privacy" className="navbar-menu">
            Privacy
          </Link>
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

          <Toaster />
        </div>
        </>
  );
}


export default Navbar;
// //
// import "./Navbar.css"
// import logo from "./expense.png"

// import { Link } from 'react-router-dom';
// import menuicon from "./menu-icon.png"
// import { useState } from 'react';
// import toast from "react-hot-toast"


// function Navbar() {

//     const [isMenuOpen, setIsMenuOpen] = useState(false);


//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (<>

//         <div className="navbar-container "  >
//             <div className='logo-container'>
               
//                 <img src={logo} className='logo' alt="logo" />
//                 <span className="navbar-brand-name">Expense Tracker</span>

//                 <img src={menuicon} className='menuicon' alt="logo" onClick={toggleMenu} />
//             </div>

//             {/* for small device */}
//             {
//                 isMenuOpen ?
//                     <div className='menu-icon-container'>
//                         <Link to="/" className='menu-navbar-item'>Home</Link>
//                         <Link to="/about" className='menu-navbar-item'>About</Link>
//                         <Link to="/add-transaction" className='menu-navbar-item'>+ Transaction</Link>
//                         <Link to="/review" className='menu-navbar-item'>Review</Link>
//                         <span className='menu-navbar-item' onClick={() => {
//                             localStorage.clear()
//                             toast.success(Logged out successfully!!)
//                             setTimeout(() => {
//                                 window.location.href = "/login"
//                             }, 2000)
//                         }}>Logout</span>

//                     </div> : null}

//             <div className='nav-item-container '>
//                 <Link to="/" className='nav-item'>Home</Link>
//                 <Link to="/about" className='nav-item'>About</Link>
//                 <Link to="/add-transaction" className='nav-item'>+Transaction</Link>
//                 <Link to="/review" className='nav-item'>Review</Link>
//             </div>

//             <span className="login" onClick={() => {
//                  localStorage.clear()
//                 toast.success(Loged out successfully)
            
//                 setTimeout(() => {
//                     window.location.href = "/login"
//                 }, 2000)


//             }}>Logout</span>
//         </div> 
        
//     </>
   
//     )
// }


// export default Navbar