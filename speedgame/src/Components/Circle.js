import React from 'react';
import '../Assets/Circle.css';



const Circle = (props) => {
    return (
        <div>
            <div className={`circle ${props.color} ${props.active ? "active" : ""}`} onClick={props.click} style={{pointerEvents: props.disabled ? "auto" : "none"}}>
                <p>{props.id}</p>

            </div>
        </div>
    );
};

export default Circle;