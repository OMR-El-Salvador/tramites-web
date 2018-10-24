import React, { Component } from 'react';
import ProcedureSearch from '../../components/Procedure/Search';
import Categories from '../UI/Categories'
import Background from '../../img/bg-bw.jpg';

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
      <div>
        <section className='pb_cover_v3 text-left' id='section-home' style={divStyle}>
          <div className='container'>
            <div className='row align-items-center justify-content-center'>
              <div className='col-md-6'>
                <h1 className='mb-3 site-title'>gob<span className='title-dot'></span>sv </h1>
                  <p className='home-description' style={descriptionStyle}>
                    Bienvenido a tu portal para consulta de Trámites. Podrás encontrar información
                    sobre todos los trámites del Gobierno de El Salvador.
                  </p>
              </div>
              <div className='col-md-1'>
              </div>
              <ProcedureSearch />
            </div>
          </div>
        </section>
        <Categories />
      </div>
    )
  }
}
