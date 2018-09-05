import React, { Component } from 'react';
import './Categories.css';

const categories = [
  {
    id: 1,
    name: 'Subsidios y Programas Sociales',
    iconClass: 'fas fa-hand-paper',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
                  'Consonantia, there live the blind texts'
  },
  {
    id: 2,
    name: 'Personas con discapacidad',
    iconClass: 'fab fa-accessible-icon',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 3,
    name: 'Vehículos y transporte',
    iconClass: 'fas fa-shuttle-van',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 4,
    name: 'Educación',
    iconClass: 'fas fa-graduation-cap',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 5,
    name: 'Construcción',
    iconClass: 'fas fa-toolbox',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 6,
    name: 'Inicio y operación de negocios',
    iconClass: 'fas fa-industry',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 7,
    name: 'Dinero y Obligaciones tributarias',
    iconClass: 'fas fa-hand-holding-usd',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 8,
    name: 'Pareja y Familia',
    iconClass: 'fas fa-heart',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 9,
    name: 'Migración',
    iconClass: 'fas fa-globe-americas',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 10,
    name: 'Trabajo y Obligaciones Patronales',
    iconClass: 'fas fa-briefcase',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 11,
    name: 'Ambiente, agro, alimentos y bebidas',
    iconClass: 'fab fa-pagelines',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 12,
    name: 'Cultura y Entretenimiento',
    iconClass: 'fas fa-theater-masks',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 13,
    name: 'Asociaciones y Fundaciones',
    iconClass: 'fas fa-hands-helping',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 14,
    name: 'Importaciones y Exportaciones',
    iconClass: 'fas fa-atlas',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 15,
    name: 'Energía y Comunicaciones',
    iconClass: 'fas fa-lightbulb',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 16,
    name: 'Seguridad, Defensa y Materiales peligrosos',
    iconClass: 'fas fa-shield-alt',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 17,
    name: 'Salud',
    iconClass: 'fas fa-stethoscope',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  },
  {
    id: 18,
    name: 'Identidad',
    iconClass: 'fas fa-id-card',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and ' +
      'Consonantia, there live the blind texts'
  }
]

export default class Categories extends Component {
  render() {
    return (
      <div>
        <section>
          <div className='container'>
            {/* <div className='row justify-content-center mb-5'>
              <div className='col-md-6 text-center mb-5'>
                <h5 className='text-uppercase pb_font-15 mb-2 pb_color-dark-opacity-3 pb_letter-spacing-2'><strong>Features</strong></h5>
              </div>
            </div> */}
            <div className='row group-by'>
              <div className='col-md-3 offset-md-9'>
                <form>
                  <div className='form-group row'>
                    <select className='form-control-lg form-control' id='group-by'>
                      <option>Categorías</option>
                      <option>Ministerios</option>
                      <option>Orientación</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            <div className='row'>
              {
                categories.map(cat => (
                  <div key={cat.id} className='col-lg-4 col-sm-6 d-flex align-items-stretch'>
                    <div className='pb_feature-v1 card text-center'>
                      <div className='pb_icon card-img-top'>
                        <i className={cat.iconClass + ' pb_icon-gradient'}></i>
                      </div>
                      <div className='media-body card-body d-flex flex-column'>
                        <h6 className='mt-0 mb-3 heading card-title'>{cat.name}</h6>
                        <p className='text-sans-serif card-text text-left'>{cat.description}</p>
                        <button href='#' className='btn card-btn mt-auto'>Ver trámites</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </div>
    )
  }
}
