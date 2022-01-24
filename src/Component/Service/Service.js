import React from "react";
import Card from "../Cards/Card";
import Carddata from "../Cards/Carddata";

const Service = () =>{
  return(
  <>
        <div className="my-5">
           <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                 {/* {
                   Carddata.map((val,ind) =>{
                     return <Card key={ind} 
                     image={val.image}
                     title={val.title}/>
                   })
                     
                  } */}
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
              </div>
            </div>
          </div>

        </div>
        </>
  );
};

export default Service;