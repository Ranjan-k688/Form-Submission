import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Home.css";
import bg from "../image/img6.jpeg";

class Home extends Component {

  // constructor(props){
  //   super(props)
  //   const token = localStorage.getItem("token")

  //   let loggedin = true
  //   if(token == null){
  //     loggedin = false
  //   }
  //   this.state={
  //     loggedin
  //   }
  // }

  render() {
    // if(this.state.loggedin === false){
    //   return <Navigate to="login" />
    // }
    return (

      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-center flex-column">
                  <h1>Grow your business With <strong className="brand-name">ReactTuts</strong></h1>
                  <h2 className="my-3"> We are best web devloper</h2>
                  <div className="mt-3">
                    <Link to="/service" className="btn">Get Started</Link>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={bg} className="img-fluid animated alt='header image'" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home;