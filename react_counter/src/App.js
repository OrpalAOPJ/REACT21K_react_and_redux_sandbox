// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React, {Component} from 'react';

const App = () => {
  return (
    <div>
      {/* <h1>This is H1 in App.js</h1> */}
      <Header />   
      <Main />   
      <Footer />

    </div>
  )
}

export default App;
