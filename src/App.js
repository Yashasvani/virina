// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header.js';
import Home from './components/home.js';
import './components/home.css';
import Footer from './footer.js';
import NavBar from './components/navbar.js';
import Login from './components/login.js';
// import Home from './components/home.js';
import About from './components/about.js';
import Achievement from './components/achievement.js';
import Development from './components/development.js';
import Campaign from './components/campaign.js';
import Impact from './components/impact.js';

const App = () => {
  return (
  <div style={appStyle}>
     
      <Router>
      
      <NavBar />
      
    <div>
      <Routes>
      
        <Route exact path="/Home" components={Home} />
        <Route path="/about" components={About} />
        <Route path="/ACHIEVEMENT" components={Achievement} />
        <Route path="/campaign" components={Campaign} />
        <Route path="/Development" components={Development} />
        <Route path="/Impact" components={Impact} />
        <Route path="/Login" components={Login} />
        </Routes>
    </div>
  </Router>
      <main style={mainStyle}>
        <Home/>
      </main>
      
      <Footer />
    </div>
  );
};

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainStyle = {
  flex: '1',
  padding: '20px',
};

export default App;

