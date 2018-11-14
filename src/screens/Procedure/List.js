import React, { Component } from 'react';
import queryString from 'query-string';

import '../../services/http';

import { HttpService } from '../../services/http';
import ProcedureSearchResults from '../../components/Procedure/SearchResults';
import Loading from '../../components/UI/Loading';

export default class ProcedureListScreen extends Component {
  constructor(props) {
    super(props);
    let params = queryString.parse(this.props.location.search)
    this.state = {
      term: params.term,
      procedures: [],
      status: 'loading'
    };
  }

  componentDidMount() {
    let resPath = 'rpc/procedures_search';
    let modesPath = 'modes(id,name,code,description,categories(id,name))';
    let instPath = 'institution(id,name,url)';
    let params = '?select=id,name,code,' + modesPath + ',' + instPath + '&term=' + this.state.term;
    HttpService.getResource(resPath, params).then(
      data => this.setState({procedures: data, status: 'success'}
    ));
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                {this.state.status === 'loading' ?
                <div className='text-center'><Loading /></div> :
                <div>
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
                </div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}