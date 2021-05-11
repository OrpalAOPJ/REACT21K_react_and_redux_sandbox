import React from 'react';
import '../Assets/GameOver.css';

const closeHandler = () => {
    window.location.reload();
};

const GameOver = (props) => {
    return (
        <div className="overlay">
            <div className="popup-wrapper">
                <div className="close-popup" onClick={closeHandler}>x</div>
                <h2>Game Over</h2>
                <p>Your score is <span className="score">{props.score}</span></p>
            </div>
        </div>
    );
};

export default GameOver;