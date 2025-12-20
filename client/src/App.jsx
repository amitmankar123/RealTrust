import { useState } from 'react'
import HeroSection from './components/Hero/hero'
import Navbar from './components/Navbar/navBar'
import About from './components/About/about'
import Choose from './components/Choose/choose'
import Clients from './components/Client/client'
import AboutUs from './components/AboutUs/abutus'
import OurProjects from './components/Ourproject/ourProject'
import HappyClients from './components/HappyClient/happyClient'
import LearnMore from './components/LearmMore/learnMore'
import Suscribe from './components/Suscribe/suscribe'
import Footer from './components/Footer/footer'
import Dashboard from './components/DashBoard/Dashboard'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <About />
            <Choose />
            <Clients />
            <AboutUs />
            <OurProjects />
            <LearnMore />
            <Suscribe />
            <Footer />
          </>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;