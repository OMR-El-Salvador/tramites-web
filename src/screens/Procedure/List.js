import React, { Component } from 'react';
import queryString from 'query-string';

import '../../services/http';

import { HttpService } from '../../services/http';
import ProcedureSearchResults from '../../components/Procedure/SearchResults';

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
    let resPath = 'rpc/procedures_search';
    let params = '?select=id,name,code,modes(id,name,code,description),institution(name,url)&term=' + this.state.term;
    HttpService.getResource(resPath, params).then(data => this.setState({procedures: data}));
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <p className='result-text'>
                  {
                    this.state.procedures.length > 1
                    ?
                    'Se encontraron ' + this.state.procedures.length + ' resultados '
                    :
                    this.state.procedures.lenght === 1
                    ?
                    'Se encontró un resultado '
                    :
                    'No se encontraron resultados '
                  }
                  para "<em className='term'>{this.state.term}</em>":
                </p>
                <ProcedureSearchResults procedures={this.state.procedures} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}