import React, {Component} from 'react';
import Box from "./Box";

class BoxesList extends Component {
  state = {
    persons : [
      {
        name: "Bill",
        age: 30,
        title: "CEO",
      },
      {
        name: "Steve",
        age: 25,
        title: "CMO",
      },
      {
        name: "Laura",
        age: 27,
        title: "CTO",
      }
    ]
  };

  handleClick = () => {
    console.log("wow again");
    this.setState({
      persons : [
        {
          name: "Bill",
          age: 30,
          title: "Fired",
        },
        {
          name: "Steve",
          age: 25,
          title: "Fired",
        },
        {
          name: "Laura",
          age: 27,
          title: "Fired",
        }
      ]
    });
};


  render() {
    return (
      <main>
          <div>
          <button onClick={this.handleClick}>Click me main page</button>

          <Box
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
          />
          <Box
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
          />
          <Box
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
          />

            {/* Data with fixed functional component */}
{/*               <Box name="Mike" age="20" title="student"/>
              <Box name="James" age="21" title="student" />
              <Box name="Peter" age="23" title="student" /> */}
      
          </div>
      </main>
    );
    
  }
}


/* const Box = (props) => {
    return (
      <div className="box">
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Title: {props.title}</p>
      </div>
    );
  }; */



export default BoxesList;