import React, { useState } from "react";
import "./Signup.css";
import axios from "axios"
import {Link} from "react-router-dom"
import toast,{Toaster} from "react-hot-toast";


function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });

  const signup = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/signup`,
      {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        dob: user.dob,
      })
      
      if(response.data.success){
        toast.success(response.data.message)

        setUser({
          fullName: "",
          email: "",
          password: "",
          dob: "",
        })
       }

       else{
        toast.error(response.data.message)
       }
  };

  return (
    <div>
      <h1 className="auth-heading">User Registration</h1>

      <form className="auth-form">
        <input
          type="text"
          placeholder="FullName"
          className="user-input"
          value={user.fullName}
          onChange={(e) => setUser({ ...user, fullName: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="user-input"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="user-input"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          type="date"
          placeholder="Date OF Birth"
          className="user-input"
          value={user.dob}
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
        />

        <button type="button" className="btn-auth" onClick={signup}>
          Register
        </button>
      </form>

      <Link to="/login" className="auth-link">Already have an account? <span className="link-text">Login</span></Link>
      <Toaster/>
    </div>
  );
}

export default Signup;
