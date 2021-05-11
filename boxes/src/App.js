import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';


function App() {
  return (
    <div> 
      <Router>
        <Header />   
        <Main />   
        <Footer />
      </Router>

    </div>
    
  );
}

export default App;
