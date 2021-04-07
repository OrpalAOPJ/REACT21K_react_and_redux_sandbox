// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import React, {Component} from 'react';

// const App = () => {
//   return (
//  <div>
//  <h1>This is H1 in App.js</h1>
//  <Header />   
//  <Main />   
//  <Footer />

//  </div>
//  )
//   )
// }

class App extends Component {
  state = {
    counter : 0,
  }

  addHandler = () => {
    console.log("Add");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  removeHandler = () => {
    console.log("Remove");
    if(this.state.counter !== 0) {
      this.setState({
        counter: this.state.counter - 1,
      });  
    }    
  }

  resetHandler = () => {
    console.log("Reset");
    this.setState({
      counter: 0,
    })
  }

  render () {
    let circleClass = `${
      this.state.counter === 0
      ? ""
      : this.state.counter % 2 === 0
      ? "even"
      : "odd"} circle`;


    return (
      <div>
        <Header />
        <div class="main_wrapper"> 
          <h1 className={circleClass}>{this.state.counter}</h1>
          <div class="button_wrapper">
            <button onClick={this.addHandler}>Add one</button>
            <button onClick={this.removeHandler}>Remove one</button>
            <button onClick={this.resetHandler}>Reset</button>
          </div>
        {/* <Main />    */}
        </div>   
        <Footer />

      </div>
    )
  }


}

export default App;
