import React, { Component, SyntheticEvent, useState } from "react";
import "./Register.css";
import { Link, Navigate } from "react-router-dom";

const Signup = () => {
    
    const [yourname,setYourname] = useState('');
    const [email,setEmail] = useState('');
    const [pwd,setPwd] = useState('');
    const [contact,setContact] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        var deails = JSON.parse(localStorage.getItem("deails") || '[]')
        var details={
            yourname,email,pwd,contact
        }

        if(deails.push(details))
        {
            localStorage.setItem('deails',JSON.stringify(deails))
            alert("successfully submit");
           
            setYourname("");
            setEmail("");
            setPwd("");
            setContact("");
            return <Navigate to="log"/>
        }else{
            alert("not submit the data");
        }
    }
   

        return (
            <div className="container-fluid">
                <div className="row">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form className="form-contain" onSubmit={handleSubmit} >
                            <div>
                                <h3>Register</h3>
                            </div>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" class="form-control" id="yourname" name="yourname" required
                                    value={yourname} onChange={(e) => setYourname(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" class="form-control" id="email" name="email" required
                                     value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" class="form-control" id="pwd" name="pwd" required
                                     value={pwd} onChange={(e) => setPwd(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="contact">Contact:</label>
                                <input type="contact" class="form-control" id="contact" name="contact" required
                                     value={contact} onChange={(e) => setContact(e.target.value)} />
                            </div>
                            
                            <div class="checkbox">
                                <Link to="/login">Login here</Link>

                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </section>

                </div>

            </div>
        )
    }

export default Signup;