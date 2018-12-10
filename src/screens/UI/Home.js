import React, { Component } from 'react';
import ProcedureSearch from '../../components/Procedure/Search';
import Categories from '../UI/Categories'
import Background from '../../img/bg-bw.jpg';

import Logo from '../../img/icons/goes.svg';

var divStyle = {
  backgroundImage: `url(${Background})`
}

var descriptionStyle = {
  color: 'white',
  fontSize: '1.3em',
  fontWeight: '500'
}
export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid home'>
        <section className='cover text-left' id='section-home' style={divStyle}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-8'>
                <h1 className='mb-1 site-title'>gob<span className='title-dot'></span>sv </h1>
                  <p className='home-description' style={descriptionStyle}>
                    Bienvenido a tu portal para consulta de Trámites. Podrás encontrar información
                    sobre todos los trámites del Gobierno de El Salvador.
                  </p>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-3'>
                <img
                  className='mx-auto d-block mt-4'
                  src={Logo}
                  alt='Logo GOES'
                  style={{height: '15em', display: 'block', width: 'auto'}}
                />
              </div>
            </div>
            <div className='row mt-3'>
              <ProcedureSearch />
            </div>
          </div>
        </section>
        <Categories />
      </div>
    )
  }
}
