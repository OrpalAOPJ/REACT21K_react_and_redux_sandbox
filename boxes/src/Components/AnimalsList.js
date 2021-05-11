import React, { Component } from 'react';
import AnimalsCard from './AnimalsCard';
import '../AnimalsList.css';

class AnimalsList extends Component {
    state = {
        animals:[
            {id: 1, name:"Fox", img:"https://source.unsplash.com/AjZjBEjQ5Cw/"},
            {id: 2, name:"Rabbit", img:"https://source.unsplash.com/hS41iEO300E/"},
            {id: 3, name:"wolf", img:"https://source.unsplash.com/WFPWB7Vum1E/"},
        ]
    }
    render() {
        return (
        <div>

            <div className="cards-wrapper">
            
                {this.state.animals.map((animal) => {
                    return(
                        <AnimalsCard name={animal.name} img={animal.img} key={animal.id} />
                        
                        );
                    })};
                
            </div>
        </div>
        );
    }
}

export default AnimalsList;