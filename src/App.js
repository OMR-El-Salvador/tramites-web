import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import ProcedureSearch from './components/Procedure/Search';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
          <div className="container">
            <a className="navbar-brand" href="index.html">Registro Nacional de Trámites</a>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar"
              aria-expanded="false" aria-label="Toggle navigation">
              <span><i className="ion-navicon"></i></span>
            </button>
            <div className="collapse navbar-collapse" id="probootstrap-navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link" href="#">Datos</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Categorías</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Acerca de</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Preguntas frecuentes</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <h2 className="heading mb-3">gob.sv </h2>
                <div className="sub-heading">
                  <p className="mb-4">Bienvenido a tu portal para consulta de Trámites. Podrás encontrar información sobre los trámites de los 14 ministerios.</p>
                </div>
              </div>
              <div className="col-md-1">
              </div>
              <ProcedureSearch />
            </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
