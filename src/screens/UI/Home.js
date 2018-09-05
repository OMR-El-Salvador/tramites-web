import React, { Component } from 'react'
import ProcedureSearch from '../../components/Procedure/Search';

export default class Home extends Component {
  render() {
    return (
      <section
          className='pb_cover_v3 overflow-hidden cover-bg-indigo cover-bg-opacity text-left
            pb_gradient_v1'
          id='section-home'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-md-6'>
              <h1 className='mb-3 site-title'>gob<span className='title-dot'></span>sv </h1>
              <div className='sub-heading'>
                <p className='mb-4'>
                  Bienvenido a tu portal para consulta de Trámites. Podrás encontrar información
                  sobre todos los trámites del Gobierno de El Salvador.
                </p>
              </div>
            </div>
            <div className='col-md-1'>
            </div>
            <ProcedureSearch />
          </div>
        </div>
      </section>
    )
  }
}
