import React, { Component } from 'react';
import queryString from 'query-string';

import './List.css';

import ProcedureList from '../../components/Procedure/List';

const SERVER_URL = 'http://localhost:3000/';

export default class ProcedureListScreen extends Component {
  constructor(props) {
    super(props);
    let params = queryString.parse(this.props.location.search)
    this.state = {
      term: params.term,
      procedures: []
    };
  }

  componentDidMount() {
    let resourceURL = 'rpc/procedures_search';
    let params = '?select=id,name,code,modes(id,name,code,description)&term=' + this.state.term;
    let reqURL = SERVER_URL + resourceURL + params;

    fetch(reqURL)
    .then(results => results.json())
    .then(data => this.setState({procedures: data}));
  }

  render() {
    return (
      <div>
        <section className='text-left card card-body bg-light' id='section-procedures'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <p className='result-text'>
                  {
                    this.state.procedures.length > 1
                    ?
                    'Se encontraron los siguientes ' + this.state.procedures.length + ' resultados '
                    :
                    this.state.procedures.lenght === 1
                    ?
                    'Se encontró el siguiente resultado '
                    :
                    'No se encontraron resultados '
                  }
                  para "<em>{this.state.term}</em>":
                </p>
                <hr />
                <ProcedureList procedures={this.state.procedures} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}