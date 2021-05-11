import React, { Component } from 'react';
import './App.css';
import Circle from './Components/Circle';
import GameOver from './Components/GameOver';

import game_over_sound from "./Assets/sounds/pacman_death.wav";
import game_start_sound from "./Assets/sounds/pacman_beginning.wav";
import game_click_sound from "./Assets/sounds/pacman_eatghost.wav";

const getRndinteger = (min,max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
state = {
  score: 0,
  current: 0,
  circles: [
    {id: 1, color: "color1"},
    {id: 2, color: "color2"},
    {id: 3, color: "color3"},
    {id: 4, color: "color4"},
    {id: 5, color: "color5"},
    {id: 6, color: "color6"},
  ],
  showGameOver: false,
  rounds: 0,
  gameStart: false,
  gameStop: true,
};

timer = undefined;
pace = 1500;

clickHandler = (id) => {
  // console.log('wow, you clicked me '+ id);

  if (this.state.current !== id) {
    this.endHandler();
    return;
  }


  this.setState({
    score: this.state.score + 1,
    rounds: 0,
  })
};


nextCircle = () => {

  if (this.state.rounds >= 5) {
    this.endHandler();
    return;
  }


  let nextActive = undefined;
  do {
    nextActive = getRndinteger(1,6);
  } while (nextActive === this.state.current);
  
  this.setState({
    current: nextActive,
    rounds: this.state.rounds + 1,

  });

  console.log(this.state.rounds);

  this.pace *= 0.95;
  this.timer = setTimeout(this.nextCircle, this.pace);

  // console.log('active circle is ', this.state.current);
};


startHandler = () => {
  this.nextCircle();
  this.setState({gameStart:true});
  this.setState({gameStop:false});
};

endHandler = () => {
  clearTimeout(this.timer);
  this.setState({
    showGameOver: true
  });
};



  render() {
    // const can be used inside render but not before.
    const circleList = this.state.circles.map((c) => {
      return <Circle
              id={c.id}
              key={c.id}
              color={c.color}
              click={() => this.clickHandler(c.id)}
              active={this.state.current === c.id}
              disabled={this.state.gameStart}
            />;
    });


    return (
      <div>

        <div className="App-header">
          <div className="game-wrapper">
            <div className="game-title">
              <h1>Speedgame</h1>
            </div>
            <div className="button-wrapper">
              <button onClick={this.startHandler} disabled={this.state.gameStart}>Start</button>
              <button onClick={this.endHandler} disabled={this.state.gameStop}>Stop</button>
            </div>
            <div className="score-wrapper">
              Score: <span id="score"> {this.state.score}</span>
            </div>
            <div className="popup">
              
              {this.state.showGameOver && <GameOver score={this.state.score} />}
              
            </div>
            <div className='circle-wrapper'>
              {circleList}
            </div>
          </div>
        </div>
        <footer>
        <a href='https://www.freepik.com/vectors/christmas'>Images by freepik - www.freepik.com</a>
        </footer>
      </div>
    );
  }
}

export default App;