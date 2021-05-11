import React,{useState, useEffect} from "react";
import './App.css';
import Recipe from './Recipe';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {

  // API credentials
const params = {
  access_key: process.env.REACT_APP_RECIPES_API_KEY,
  app_id: "e7e72156",
  // process.env.REACT_APP_RECIPES_APP_ID,
}


  // STATES
  // const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');


// This loads the getRecipes function every time the event in the square brackets happens. If set to [search] it would try to fetch every time the user writes a letter in the search box, which is not a good idea. Hence, the Query state can be used to run it only when the user submits the search.
  useEffect(() => {
    console.log('Effect has been run');
    getRecipes();
  }, [query]);

  const getRecipes = async () => {    
    
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${params.app_id}&app_key=${params.access_key}`);
    if(response.ok) {

      const data = await response.json();
      console.log(data.hits);
      setRecipes(data.hits);

    } else {

      alert(`HTTP-Error: ${response.status}`);
    
    }
   
    /*     alternatively: 
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(response => response.json())
    .then(data=>console.log(data.hits));
    */

    }

// This function serves to update the characters in the search field as they are typed.
    const updateSearch = e => {
      setSearch(e.target.value);
      // console.log(search);
    }

    // This function will be called when submitting the form.
    const getSearch = e => {
      // remember this to prevent the page from being refreshed
      e.preventDefault();
      // set the setQuery state to whatever we have in our search:
      setQuery(search);
      console.log(`the submitted search is ${search}`);
      // clear the search bar contents after the search has been submitted.
      setSearch('');
    }

  return (

    <Router>
      <div className="App">
      <h1>Recipes</h1>

      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button
          className="search-button"
          type="submit"
          >
          Search
        </button>
      </form>

    <div className="recipes">

      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        instructions={recipe.recipe.url}
        />
        ))};

      </div>
  {/*     <h1 onClick={()=>setCounter(counter+1)}>
        {counter}
      </h1> */}

      </div>
    </Router>
  );
}

export default App;
