import React from 'react';
import '../AnimalsCard.css';

const AnimalsCard = (props) => {
    return (
        <div className='animal-card'>
            <div className="animal-name">
            {props.name}
            </div> 
            <div className="animal-image">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="animal-desc">
                Description
            </div>
            <div className='animal-link'>
                <a href={props.img} target="_blank">See large image</a>
            </div>

        </div>
    );
};

export default AnimalsCard;