import React, { Component } from 'react';
import './App.css';
import ProcedureSearch from './ProcedureSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">gob.sv</h1>
        </header>
        <h1 className="App-intro">
          Consulta web de trámites
        </h1>
        <ProcedureSearch />
      </div>
    );
  }
}

export default App;
