import React, { Component } from 'react';
import queryString from 'query-string';

import './List.css';

import ProcedureList from '../../components/Procedure/List';

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
    fetch('http://localhost:3000/procedures?select=id,name,description,modes(id,name)')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({procedures: data});
    });
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
                    'Se encontró el siguiente resultado '
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