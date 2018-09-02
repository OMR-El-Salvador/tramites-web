import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import ProcedureSearch from './components/Procedure/Search';

const Data = () => (
  <div>
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
          <h3>Data</h3>
        </div>
      </div>
    </section>
  </div>
)

const Categories = () => (
  <div>
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
          <h3>Categories</h3>
        </div>
      </div>
    </section>
  </div>
)

const About = () => (
  <div>
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
          <h3>About</h3>
        </div>
      </div>
    </section>
  </div>
)

const Contact = () => (
  <div>
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
          <h3>Contact</h3>
        </div>
      </div>
    </section>
  </div>
)

const FAQ = () => (
  <div>
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
          <h3>FAQ</h3>
        </div>
      </div>
    </section>
  </div>
)

const Home = () => (
  <div>
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
)

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">Gob.sv</Link>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#probootstrap-navbar" aria-controls="probootstrap-navbar"
            aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="ion-navicon"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="probootstrap-navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/data">Datos</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/categories">Categorías</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">Acerca de</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/faq">Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

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
        </div>
      </Router>
    );
  }
}

export default App;
