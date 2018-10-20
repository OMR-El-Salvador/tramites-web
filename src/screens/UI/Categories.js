import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../services/http';

import './Categories.css';
import { HttpService } from '../../services/http';

const icoClass = {
  'SPS-001': 'fas fa-hand-paper',
  'PD-001': 'fab fa-accessible-icon',
  'VT-001': 'fas fa-shuttle-van',
  'EDU-001': 'fas fa-graduation-cap',
  'CON-001': 'fas fa-toolbox',
  'ION-001': 'fas fa-industry',
  'DOT-001': 'fas fa-hand-holding-usd',
  'PF-001': 'fas fa-heart',
  'MIG-001': 'fas fa-globe-americas',
  'TOP-001': 'fas fa-briefcase',
  'AAB-001': 'fab fa-pagelines',
  'CE-001': 'fas fa-theater-masks',
  'AF-001': 'fas fa-hands-helping',
  'IE-001': 'fas fa-atlas',
  'EC-001': 'fas fa-lightbulb',
  'SDM-001': 'fas fa-shield-alt',
  'SAL-001': 'fas fa-stethoscope',
  'ID-001': 'fas fa-id-card',
  MAG: 'fas fa-leaf',
  MARN: 'fas fa-tint',
  MC: 'fas fa-theater-masks',
  MDN: 'fas fa-shield-alt',
  MGDT: 'fas fa-map',
  MH: 'fas fa-clipboard-list',
  MINEC: 'fas fa-money-bill-alt',
  MINED: 'fas fa-book',
  MINSAL: 'fas fa-user-md',
  MITUR: 'fas fa-umbrella-beach',
  MJSP: 'fas fa-balance-scale',
  MOP: 'fas fa-road',
  MRREE: 'fas fa-passport',
  MTPS: 'fas fa-industry',
  CIU: 'fas fa-users',
  EMP: 'fas fa-building',
  ORG: 'fas fa-warehouse',
}

export default class Categories extends Component {
  constructor (props) {
    super(props)
    this.state = { groupBy: 'CAT', ministries: [], categories: [], classes: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) { this.setState({ groupBy: evt.target.value.toUpperCase() }); }

  componentDidMount() {
    HttpService.getResource('institutions').then(data => this.setState({ministries: data}));
    HttpService.getResource('categories').then(data => this.setState({categories: data}));
    HttpService.getResource('classes').then(data => this.setState({classes: data}));
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
                  this.state.categories.map(cat => (
                    <div key={cat.id} className='col-lg-4 col-sm-6 d-flex align-items-stretch'>
                      <Link to={`/modes/category/${cat.id}`}>
                        <div className='card'>
                          <div>
                            <i className={icoClass[cat.code]}></i>
                          </div>
                          <div className='d-flex flex-column'>
                            <p className='card-title'>{cat.name}</p>
                            <p className='card-text text-left'>{cat.description}</p>
                          </div>
                        </div>
                      </Link>
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
                      <div className='card'>
                        <div>
                          <i className={icoClass[min.code]}>
                          </i>
                        </div>
                        <div className='d-flex flex-column'>
                          <p className='card-title'>{min.name}</p>
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
                  this.state.classes.map(cl => (
                    <div key={cl.id} className='col-lg-4 col-sm-4 align-items-stretch'>
                      <div className='card'>
                        <div>
                          <i className={icoClass[cl.code]}></i>
                        </div>
                        <div className='d-flex flex-column'>
                          <p className='card-title'>{cl.name}</p>
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
