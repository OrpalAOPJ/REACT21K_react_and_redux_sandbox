import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import BoxesList from './BoxesList';
import AnimalsList from './AnimalsList';
import '../Main.css';



const Home = () => {
    return (
        <div>
            <h1>This is the home page</h1>
        </div>
    );
};

const Gallery = () => {
    return (
        <div>
            <h1>This is the Gallery page</h1>
        </div>
    );
};
const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/animals">Animals</Link>
                    </li>
                    <li>
                        <Link to="/boxes">Boxes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const Main = () => {
    return (
        <div className='Main'>
            <h1>Hello World from Main</h1>
            <Nav />
            <Switch className='switch-content'>
                <Route path="/" exact component={Home}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/animals" component={AnimalsList}/>
                <Route path="/boxes" component={BoxesList}/>

            </Switch>
        </div>
    );
};

export default Main;