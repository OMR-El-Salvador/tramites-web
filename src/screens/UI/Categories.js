import React, { Component } from 'react'
import Footer from '../UI/Footer';

export default class Categories extends Component {
  render() {
    return (
      <div>
        <section className='pb_section bg-light pb_pb-250' id='section-features'>
          <div className='container'>
            <div className='row justify-content-center mb-5'>
              <div className='col-md-6 text-center mb-5'>
                {/* <h5 className='text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2'><strong>Features</strong></h5> */}
                <h2>Categorías</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-4 col-md- col-sm-6'>
                <div className='media d-block pb_feature-v1 text-left'>
                  <div className='pb_icon'><i className='fas fa-users fa-xs pb_icon-gradient'></i></div>
                  <div className='media-body'>
                    <h5 className='mt-0 mb-3 heading'>Beneficios y Programas Sociales</h5>
                    <p className='text-sans-serif'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md- col-sm-6'>
                <div className='media d-block pb_feature-v1 text-left'>
                  <div className='pb_icon'><i className='fab fa-accessible-icon fa-xs pb_icon-gradient'></i></div>
                  <div className='media-body'>
                    <h5 className='mt-0 mb-3 heading'>Personas con discapacidad</h5>
                    <p className='text-sans-serif'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md- col-sm-6'>
                <div className='media d-block pb_feature-v1 text-left'>
                  <div className='pb_icon'><i className='fas fa-globe-americas pb_icon-gradient'></i></div>
                  <div className='media-body'>
                    <h5 className='mt-0 mb-3 heading'>Migración y Salvadoreños en el mundo</h5>
                    <p className='text-sans-serif'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md- col-sm-6'>
                <div className='media d-block pb_feature-v1 text-left'>
                  <div className='pb_icon'><i className='fab fa-envira pb_icon-gradient'></i></div>
                  <div className='media-body'>
                    <h5 className='mt-0 mb-3 heading'>Ambiente, agro y alimentos</h5>
                    <p className='text-sans-serif'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md- col-sm-6'>
                <div className='media d-block pb_feature-v1 text-left'>
                  <div className='pb_icon'><i className='fas fa-theater-masks pb_icon-gradient'></i></div>
                  <div className='media-body'>
                    <h5 className='mt-0 mb-3 heading'>Cultura y Entretenimiento</h5>
                    <p className='text-sans-serif'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts.</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md- col-sm-6'>
                <div className='media d-block pb_feature-v1 text-left'>
                  <div className='pb_icon'><i className='fas fa-lightbulb pb_icon-gradient'></i></div>
                  <div className='media-body'>
                    <h5 className='mt-0 mb-3 heading'>Energía y Comunicaciones</h5>
                    <p className='text-sans-serif'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
