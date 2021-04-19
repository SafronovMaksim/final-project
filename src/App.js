import React, {Component} from "react";
import {useDispatch} from 'react-redux';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/pages/about/About'
import Home from './components/pages/home/Home'
import RecipeBook from './components/pages/book/RecipeBook'
import ProductCard from './components/pages/book/ProductCard'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
  function wrapHeader(Component) {
    return (
      <div>
        <Header/>
        <Component />
        <Footer/>
      </div>
    );
  }
 
  function App() {
    return(
      <Router>
          <Switch>
            <Route path="/" exact>
              <div className="home">{wrapHeader(Home)}</div>
            </Route>
            <Route path="/catalog" >{wrapHeader(RecipeBook)}</Route>
            <Route path="/about">{wrapHeader(About)}</Route>
            <Route path="/card">{wrapHeader(ProductCard )}</Route>
          </Switch>
        </Router>
    );
  }

export default App;