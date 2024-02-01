import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Greetstudent from "./Greetstudent";
import Details from "./Details";
import Addpost from "./Addpost";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/addpost" element={<Addpost/>}/>
      <Route path="/about/studentlist/:student_name" element={<Greetstudent/>}/>
    </Routes>
  );
};

export default Routers;
