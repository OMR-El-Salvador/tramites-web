import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import About from './screens/UI/About';
import Categories from './screens/UI/Categories';
import Data from './screens/UI/Data';
import Home from './screens/UI/Home';
import NavBar from './screens/UI/NavBar';
import Footer from './screens/UI/Footer';
import ProcedureListScreen from './screens/Procedure/List';
import ModeDetailScreen from './screens/Mode/Detail';
import ModeCategoryListScreen from './screens/Mode/CategoryList';

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
          <Route path="/modes/:id([0-9]{1,6})" component={ModeDetailScreen} />
          <Route path="/modes/category/:id([0-9]{1,6})" component={ModeCategoryListScreen} />
          <Route exact path="/procedures" component={ProcedureListScreen} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
