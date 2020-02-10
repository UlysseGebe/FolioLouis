import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Slider from './components/Slider/Slider'
import Details from './components/Details'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header';

//import components

const Router = () => 
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/project" component={Details} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Slider} />
        </Switch>
    </BrowserRouter>


export default Router;