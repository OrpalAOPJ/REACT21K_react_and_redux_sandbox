import React from 'react';


const Box = (properties) => {
    return (
      <div className="box">
        <h2>Name: {properties.name}</h2>
        <p>Age: {properties.age}</p>
        <p>Title: {properties.title}</p>
      </div>
    );
  };


const Main = () => {
	return (
        <main>
            <div>
                <Box name="Mike" age="20" title="student"/>
                <Box name="James" age="21" title="student" />
                <Box name="Peter" age="23" title="student" />
        
            </div>
        </main>
    );
};

export default Main;