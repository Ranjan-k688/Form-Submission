import React, { Component,  useState,useEffect } from "react";
import "./Register.css";
import View from "../Form/View";
import { Link } from "react-router-dom";

// gettings the values of localstorage

const getDatafromLS = () =>{
    const data = localStorage.getItem("details");
    if(data)
    {
        return JSON.parse(data);
    } else{
        return []
    }

}

const Signup = () => {
//main array object state
const [details,setdetails] = useState(getDatafromLS());

//input field state
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[pwd,setPwd]=useState('');
const[contact,setContact]=useState('');

// form submit
const handleFormSubmit=(e)=>{
    e.preventDefault();

    // creating an object
    
    let detail={
         name,
        email,
        pwd,
        contact,
    }
    setdetails([...details,detail]);
    setName('');
    setEmail('');
    setPwd('');
    setContact('');
}

// saving data to localstorage
useEffect(()=>{
  localStorage.setItem('deails',JSON.stringify(details));
},[details])

        return (
            <div className="container-fluid">
                <div className="row">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form className="form-contain" onSubmit={handleFormSubmit} autoComplete="off" >
                            <div>
                                <h3>Register</h3>
                            </div>
                            <div className="form-group">
                                <label for="name">Name:</label>
                                <input type="text" className="form-control" id="name" name="name"
                                     onChange={(e)=>setName(e.target.value)} value={name}/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email address:</label>
                                <input type="email" className="form-control" id="email" name="email"
                                    onChange={(e)=>setEmail(e.target.value)} value={email} />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="password" className="form-control" id="pwd" name="pwd"
                                    onChange={(e)=>setPwd(e.target.value)} value={pwd} />
                            </div>
                            <div className="form-group">
                                <label for="contact">Contact:</label>
                                <input type="contact" className="form-control" id="contact" name="contact"
                                    onChange={(e)=>setContact(e.target.value)} value={contact} />
                            </div>
                            
                            <div className="checkbox">
                                <Link to="/login">Login here</Link>
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                    </section>
                </div>

                <div className="view-content">
                    {details.length > 0 && <>
                    <div className="table-responsive">
                        <table className="table">
                           <thead>
                               <tr>
                                   <th>Name</th>
                                   <th>Email</th>
                                   <th>Password</th>
                                   <th>Contact</th>
                               </tr>
                           </thead>
                           <tbody>
                               <View details={details}/>                              
                           </tbody>
                        </table>

                    </div>
                    </>}
                   {details.length < 1 && <div>No detail is here</div>}
                </div>

            </div>
        )
    }

export default Signup;