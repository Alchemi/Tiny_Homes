import React from "react";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

import Featured from './components/featured/Featured';
import Best from './components/best/Best';
import Footer from './components/footer/Footer';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';

import { Container} from "reactstrap";
import Login from './components/Login'; 

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Best />
      <Featured />
      <Footer />
    </>
  );
}

export default App;