import React, { Component } from "react";
import "./Login.css";
import { Link, Navigate } from "react-router-dom";

class Login extends Component {

    documentData;
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.state ={
             yourname :'',
             pwd:''
        }
    }

    // form submit
    onSubmit(e){
        e.preventDefault()
        localStorage.setItem('document',JSON.stringify(this.state));
    }

    

    // react lifecycle
componentDidMount(){
    this.documentData = JSON.parse(localStorage.getItem('document'));
    
    if(localStorage.getItem('document'))
    {
        this.setState({
            yourname:this.documentData.yourname,
            pwd:this.documentData.pwd
        })
    } else {
          
        this.setState({
            yourname:'',
            pwd:''
        })
    }
}

    render() {      
        return (
            <div className="container-fluid">
                <div className="row">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form className="form-container" onSubmit={this.onSubmit} >
                            <div>
                                <h3>Login</h3>
                            </div>
                            <div class="form-group">
                                <label for="name">Your Name:</label>
                                <input type="text" class="form-control" id="name" name="yourname" 
                                value={this.state.yourname} onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label for="pwd">Password:</label>
                                <input type="text" class="form-control" id="pwd" name="pwd" 
                                 value={this.state.pwd} onChange={this.onChange}  />
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
}

export default Login;


    
    
      
    
       
    


