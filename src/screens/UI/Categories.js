import React, { Component } from 'react';
import '../../services/http';

import './Categories.css';
import CategoryCard from '../../components/Category/Card';

import { HttpService } from '../../services/http';
import ClassCard from '../../components/Classes/Card';

const cardStyle = { marginTop: '0.5em', marginBottom: '0.5em' }

export default class Categories extends Component {
  constructor (props) {
    super(props)
    this.state = { groupBy: 'CAT', ministries: [], categories: [], classes: [] };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) { this.setState({ groupBy: evt.target.value.toUpperCase() }); }

  componentDidMount() {
    HttpService.getResource('institutions', '?order=name')
        .then(data => this.setState({ministries: data}));
    HttpService.getResource('categories', '?order=name')
        .then(data => this.setState({categories: data}));
    HttpService.getResource('classes', '?order=name').then(data => this.setState({classes: data}));
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
            <div className='row'>
              { this.state.groupBy === 'CAT' &&
                this.state.categories.map(cat => (
                  <div key={cat.id} className='col-lg-4 col-sm-6' style={cardStyle}>
                    <CategoryCard
                      id={cat.id}
                      code={cat.code}
                      name={cat.name}
                      description={cat.description}
                      />
                  </div>
                ))
              }
              {this.state.groupBy === 'MIN' && (
                <div className='table-responsive'>
                  <table className='table table-striped table-bordered table-hover table-sm'>
                    <tbody>
                    {this.state.ministries.map(min => (
                      <tr key={min.id} >
                        <td style={{ fontWeight: '600', verticalAlign: 'middle' }}>{min.name}</td>
                        <td className='text-center text-white'>
                          <a
                            className='btn btn-info'
                            role='button'
                            href={`/tramites/institucion/${min.id}`}>
                            Ver trámites
                          </a>
                        </td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
              )}
              {this.state.groupBy === 'CL' &&
                this.state.classes.map(cl => (
                  <div key={cl.id} className='col-lg-3 col-sm-4' style={cardStyle}>
                    <ClassCard id={cl.id} code={cl.code} name={cl.name} />
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