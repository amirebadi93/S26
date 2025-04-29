import React from 'react'
import { Routes, Route } from "react-router";
import Home from '../Home';
import About from '../About-Us/about';
function Router() {
  return (
    <Routes>
        <Route 
        path='/'
        element={<Home/>} />
        <Route
        path='/about'
        element={<About/>} />
    </Routes>
  )
}

export default Router