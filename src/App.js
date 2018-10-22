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
import ProcedureListByInstitutionScreen from './screens/Procedure/ListByInstitution';
import ProcedureListByClassScreen from './screens/Procedure/ListByClass';
import ModeDetailScreen from './screens/Mode/Detail';
import ModeListByCategoryScreen from './screens/Mode/ListByCategory';

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
          <Route path="/modes/category/:id([0-9]{1,2})" component={ModeListByCategoryScreen} />
          <Route exact path="/procedures" component={ProcedureListScreen} />
          <Route
            path="/procedures/institution/:id([0-9]{1,4})"
            component={ProcedureListByInstitutionScreen}
          />
          <Route
            path="/procedures/class/:id([0-9]{1,2})"
            component={ProcedureListByClassScreen}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
