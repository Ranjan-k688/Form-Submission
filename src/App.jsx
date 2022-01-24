import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Service from "./Component/Service/Service";
import Contact from "./Component/Contact/Contact";
import Navbar from "./Component/Navbar/Navbar";
import Login from "../src/Component/Form/Login";
import Signup from "./Component/Form/Signup";
import Logout from "./Component/Form/Logout";
import Regis from "../src/Component/Form/Regis";
import Log from "../src/Component/Form/Log";
import Error from "./Component/Form/Error";
const App = () => {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/contact" element={<Contact/>}/>
          <Route  exact path="/log" element={<Log/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route element={Error} />
          
        </Routes>
        
        
    </>

  )
}

export default App;