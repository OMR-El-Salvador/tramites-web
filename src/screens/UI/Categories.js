import React, { Component } from 'react';
import './Categories.css';

const SERVER_URL = 'http://localhost:3000/';

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

const icoClass =
  {
    mag: 'fas fa-leaf',
    marn: 'fas fa-tint',
    mc: 'fas fa-theater-masks',
    mdn: 'fas fa-shield-alt',
    mgdt: 'fas fa-map',
    mh: 'fas fa-clipboard-list',
    minec: 'fas fa-money-bill-alt',
    mined: 'fas fa-book',
    minsal: 'fas fa-user-md',
    mitur: 'fas fa-umbrella-beach',
    mjsp: 'fas fa-balance-scale',
    mop: 'fas fa-road',
    mrree: 'fas fa-passport',
    mtps: 'fas fa-industry',
  }

const classes = [
  {
    id: 1,
    name: 'Ciudadanos',
    iconClass: 'fas fa-users',
  },
  {
    id: 2,
    name: 'Empresariales',
    iconClass: 'fas fa-building',
  }
]

export default class Categories extends Component {
  constructor (props) {
    super(props)
    this.state = { groupBy: 'CAT', ministries: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) { this.setState({ groupBy: evt.target.value.toUpperCase() }); }

  componentDidMount() {
    let resourceURL = 'institutions';
    let reqURL = SERVER_URL + resourceURL;

    fetch(reqURL)
    .then(results => results.json())
    .then(data => this.setState({ministries: data}));
  }

  render() {
    return (
      <div>
        <section>
          <div className='container'>
            <div className='row group-by'>
              <div className='col-md-3 offset-md-9'>
                <form>
                  <div className='form-group row'>
                    <select
                      className='form-control-lg form-control'
                      id='group-by'
                      onChange={this.handleChange}>
                      <option value='CAT'>Categorías</option>
                      <option value='MIN'>Ministerios</option>
                      <option value='CL'>Clase</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
            { this.state.groupBy === 'CAT' &&
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
                          <p className='card-text text-left'>{cat.description}</p>
                          <button href='#' className='btn card-btn mt-auto'>Ver trámites</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
            {this.state.groupBy === 'MIN' &&
              <div className='row'>
                {
                  this.state.ministries.map(min => (
                    <div key={min.id} className='col-lg-3 col-sm-6 d-flex align-items-stretch mb-4'>
                      <div className='pb_feature-v1 card text-center'>
                        <div className='pb_icon card-img-top'>
                          <i
                            className={
                              icoClass[min.code.toLowerCase()] +
                              ' pb_icon-gradient-institutions'
                            }>
                          </i>
                        </div>
                        <div className='media-body card-body d-flex flex-column'>
                          <h6 className='mt-0 mb-3 heading card-title'>{min.name}</h6>
                          <button href='#' className='btn card-btn mt-auto'>Ver trámites</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
            {this.state.groupBy === 'CL' &&
              <div className='row'>
                {
                  classes.map(cl => (
                    <div key={cl.id} className='col-lg-6 col-sm-6 align-items-stretch'>
                      <div className='pb_feature-v1 card text-center'>
                        <div className='pb_icon card-img-top'>
                          <i className={cl.iconClass + ' pb_icon-gradient-classes'}></i>
                        </div>
                        <div className='media-body card-body d-flex flex-column'>
                          <h6 className='mt-0 mb-3 heading card-title'>{cl.name}</h6>
                          <button href='#' className='btn card-btn mt-auto'>Ver trámites</button>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            }
          </div>
        </section>
      </div>
    )
  }
}
