import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';



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
                </ul>
            </nav>
        </div>
    );
};

const Main_router = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/gallery" component={Gallery}/>

            </Switch>
            <h1>Hello World from Main router</h1>
        </div>
    );
};

export default Main_router;<h1>Hello World</h1>