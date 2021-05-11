import React from "react";

const SearchBox = (props) => {
    return (
        <div>
            <input type="text" onChange={props.search} 
            placeholder="Search animals"/>
        </div>
    );

};

export default SearchBox;


// in AnimalList.js:
/* 
import SearchBox from 'SearchBox.js'



Include the search input state, e.g.

class Animalslist extends Component {
state = {
    animals: animals,
    searchInput: "";
    }

}



create the handler function for the search
searchValueHandler = () => {
    console.log("input was used");

    this.setState({
        searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
};




and in the return include on more <div> to wrap all the compoentents

<div>
<SearchBox search={this.searchValueHandler} />
<div className="animalList">{animallist}</div>
</div>





** the animal filter needs to be added after render()

const animalFilter = this.state.anmals.filter(animal => {return animal.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
});

*/