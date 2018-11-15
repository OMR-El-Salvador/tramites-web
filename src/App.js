import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
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
import Error from './components/UI/Error';
import ScrollToTop from './components/UI/ScrollToTop';
import ErrorHandler from './components/UI/ErrorHandler';

class App extends Component {
  render() {
    return (
      <Router>
        <ErrorHandler>
          <ScrollToTop>
            <div className='App'>
              <NavBar />
              <Route exact path='/' component={Home} />
              {/* <Route path='/data' component={Data} /> */}
              <Route path='/categorias' component={Categories} />
              <Route path='/acercaDe' component={About} />
              <Route path='/modalidades/:id([0-9]{1,6})' component={ModeDetailScreen} />
              <Route
                path='/modalidades/categoria/:id([0-9]{1,2})'
                component={ModeListByCategoryScreen}
              />
              <Route exact path='/tramites' component={ProcedureListScreen} />
              <Route
                path='/tramites/institucion/:id([0-9]{1,4})'
                component={ProcedureListByInstitutionScreen}
              />
              <Route
                path='/tramites/clase/:id([0-9]{1,2})'
                component={ProcedureListByClassScreen}
              />
              <Route path='/404' render={() => <div className='text-center'><Error /></div>}/>
              {/* <Redirect to='/404' /> */}
              <Footer />
            </div>
          </ScrollToTop>
        </ErrorHandler>
      </Router>
    );
  }
}

export default App;
