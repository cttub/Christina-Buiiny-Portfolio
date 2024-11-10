// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Work from './Pages/MyWork.js';
import Contact from './Pages/Contact.js';
import DiMe from './Pages/Projects/DiMe.js';
import Markitfly from './Pages/Projects/Markitfly.js';
import RageRoom from './Pages/Projects/RageRoom.js';
import RageRoomBookingCaseStudy from './Pages/CaseStudies/RageRoomBookingCaseStudy.js';
import SquawkBox from './Pages/CaseStudies/SquawkBox.js';
import StyleSheet from './Pages/StyleSheet.js';
import Navbar from './Components/Navbar'; // Import Navbar
import ScrollToTop from './Components/ScrollToTop.js';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work/Case-Studies/Enhancing-UX-Booking-RageRoom" element={<RageRoomBookingCaseStudy />} />
          <Route path="/Work/Case-Studies/Strategic-Design-Squawk" element={<SquawkBox />} />
          <Route path="/Work/DiMe" element={<DiMe />} />
          <Route path="/Work/Markitfly" element={<Markitfly />} />
          <Route path="/Work/TheRageRoomSpringfield" element={<RageRoom />} />
          <Route path="/stylesheet" element={<StyleSheet />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
