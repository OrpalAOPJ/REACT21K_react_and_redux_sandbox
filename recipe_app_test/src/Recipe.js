import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,instructions}) => {
    return(
        <div className={style.recipe}>

            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Typeof calories is {typeof({calories})}</p>
            <p>Calories {calories}</p>
            <img className={style.image} src={image} alt=""/>
            <a href={instructions} target="_blank">See intructions in original website</a>

        </div>
    );
}

export default Recipe;