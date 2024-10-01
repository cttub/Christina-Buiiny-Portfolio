// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Work from './Pages/MyWork.js';
import Contact from './Pages/Contact.js';
import DiMe from './Pages/Projects/DiMe.js';

import RageRoomBookingCaseStudy from './Pages/CaseStudies/RageRoomBookingCaseStudy.js';
import StyleSheet from './Pages/StyleSheet.js';
import Navbar from './Components/Navbar';  // Import Navbar

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work/Case-Studies/Enhancing-UX-Booking" element={<RageRoomBookingCaseStudy />} />
          <Route path = "/Work/DiMe" element = {<DiMe/>}/>
          <Route path="/stylesheet" element={<StyleSheet />} />

        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
