import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";

const AnimalSingle = () => {
    
    const [animal, setAnimal] = useState();
    let history = useHistory();
    
    let { id } = useParams();

    useEffect(() => {
        if(!animal) {
            axios.get('http://localhost:3001/animals/'+id).then((res) => setAnimal(res.data));
        }
    })

    console.log(animal);

    let animalData = undefined;

    if(!animal) {
        animalData = <h1>Loading...</h1>
    }
    if(animal) {
        animalData = (
            <>
                <div className="animal">
                    <h1>{animal.name}</h1>
                    <p>{animal.desc}</p>
                    <img src={animal.img} alt={animal.name} rel="noreferrer"/>
                    <a href={animal.link} target="_blank" rel="noreferrer">
                    Read more in Wiki.
                    </a>
                <button onClick={() => history.goBack()}>Back to animals</button>
                </div>
            </>
        );
    }



    return (

        <div>{animalData}
        </div>
        );
};

export default AnimalSingle;