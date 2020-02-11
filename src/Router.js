import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Slider from './components/Slider/Slider'
import Details from './components/Details'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import NoMatch from './components/NoMatch/NoMatch'

//import components

const Router = () => 
    <BrowserRouter>
        <Header />
        <Loader />
        <Switch>
            <Route exact path="/project/:id" component={Details} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Slider} />
            <Route exact path="*" component={NoMatch} />
        </Switch>
    </BrowserRouter>


export default Router;