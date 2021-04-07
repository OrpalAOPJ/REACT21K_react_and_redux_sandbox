import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Main_router from './Main_router';
import Footer from './Footer.js';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <div> 
      <Router>
        <Header />   
        <Main_router />   
        <Footer />
      </Router>

    </div>
    
  );
}

export default App;
