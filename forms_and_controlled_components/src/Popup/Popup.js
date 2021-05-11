import React from 'react';
import './Popup.css';

const Popup = () => {
	return (
        <div className="popup">
            <div className="popupClose">X</div>
            <div>
                <h1>Popup</h1>
                <p>Placeholder 1: </p>
                <p>Placeholder 2: </p>
                <p>Placeholder 3: </p>
                <p>Placeholder 4: </p>
                <p>Placeholder 5: </p>
            </div>
            <div className="buttonContainer">
                <button>Button 1</button>
                <button>Button 2</button>

            </div>
        </div>
    );
};

export default Popup;