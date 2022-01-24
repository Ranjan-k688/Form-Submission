import React from "react";
import { Link } from "react-router-dom";
import img3 from "../image/img3.jpeg";
const Card = (props) =>{
    return(
      <div className="col-md-4 col-10 mx-auto my-3">
        <div className="card">
           <img src={props.image}  className="card-img" alt="..../"/>
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Lormus
                 repudiandae quidem officia, consequatur sit,em ipsum dolor sit amet consectetur, 
                adipisicing elit. Aperiam quasi accusa 
                </p>
                <Link to="">Go somewhere</Link>
              </div>
        </div>
      </div>
    );
};

export default Card;