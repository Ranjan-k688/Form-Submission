import React, { Component, useState, useEffect } from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";
import Home from "../Home/Home";

const Login = (props) => {

    const[loginemail,setEmail]=useState('');
    const[loginpwd,setPwd] = useState('');

    // form submit
     const handleFormSubmit=(e)=>{
      e.preventDefault();
      let data = JSON.parse(localStorage.getItem("deails"));   
     let obj = data.find(o => o.email === loginemail && o.pwd === loginpwd);
    
    if(obj)
    {
        alert(" login successfuly ")
         return <Home/>
    }
    else{
        
        alert("Invalid user");
    }
}

    return (
        <div className="container-fluid">
            <div className="row">
                <section className="col-12 col-sm-6 col-md-3">
                    <form className="form-container" onSubmit={handleFormSubmit} >
                        <div>
                            <h3>Login</h3>
                        </div>
                        <div class="form-group">
                            <label for="name"> Email:</label>
                            <input type="email" class="form-control" id="email" name="loginemail" required
                               onChange={(e)=>setEmail(e.target.value)} value={loginemail}  />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="text" class="form-control" id="loginpwd" name="loginpwd" required
                             onChange={(e)=>setPwd(e.target.value)} value={loginpwd} />
                                
                        </div>

                        <div class="checkbox">
                            <Link to="/signup">Signup here</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="#">Forget Password</Link>
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    </form>
                </section>

            </div>

        </div>
    )
}


export default Login;










