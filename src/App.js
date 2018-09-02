import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import About from './screens/UI/About';
import Categories from './screens/UI/Categories';
import Contact from './screens/UI/Contact';
import Data from './screens/UI/Data';
import FAQ from './screens/UI/FAQ';
import Home from './screens/UI/Home';
import NavBar from './screens/UI/NavBar';
import ProcedureListScreen from "./screens/Procedure/List";
import ProcedureDetailScreen from "./screens/Procedure/Detail";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/data" component={Data} />
          <Route path="/categories" component={Categories} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route exact path="/procedures" component={ProcedureListScreen} />
          <Route path="/procedures/:id([0-9]{1,5})" component={ProcedureDetailScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
