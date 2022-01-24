import React from "react";
import map1 from "../image/map1.jpeg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container col-10">
      <h3 className="text-center mt-5 mb-4">CONTACT US</h3>
      <div className="row mt-5">
        <div className="col-sm-6 col-md-6 col-lg-6">
          
          <img src={map1} className="map" />

        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          
          <form action="">
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" id="email" />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" />
            </div>
            <div class="form-group">
              <label for="address">Address:</label>
              <textarea class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
      <div className="row mt-5">
          <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <i className='fas fa-map-marker-alt icn'></i><br/><br/>
          Location - Hazaribagh<br/>
          Jharkhand
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <i className='far fa-address-book icn'></i><br/><br/>
          Address - sindur<br/>
          Hazaribagh,Jharkhand
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <i className='fas fa-phone icn'></i><br/><br/>
          +91-7200000000<br/>
          180-2341-121
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 text-center">
          <i className='fas fa-laptop-code icn'></i><br/><br/>
          Whatsapp<br/>
          Telegram<br/>
          </div>
      </div>
    </div>
  )
}

export default Contact;