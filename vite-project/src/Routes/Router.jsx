import React from "react";
import { Routes, Route } from "react-router";
import Home from "../Home";
import About from "../About-Us/about";
import Contact from "../Contact/contact";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
