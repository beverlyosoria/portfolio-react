import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
    </Switch>
)

export default Main;