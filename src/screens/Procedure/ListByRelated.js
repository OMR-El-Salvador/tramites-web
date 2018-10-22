import React, { Component } from 'react';

import '../../services/http';

import ProcedureList from '../../components/Procedure/List';
import { HttpService } from '../../services/http';
import InstitutionCard from '../../components/Institutions/Card';

export default class ProcedureListByRelatedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      institution: { procedures: [ ] }
    };
  }

  componentDidMount() {
    let resPath = 'institutions';
    let proceduresPath = 'procedures(id,name,code,modes(id,name,code,description))';
    let params = '?select=id,name,code,' + proceduresPath + '&id=eq.' + this.state.id;
    HttpService.getResource(resPath, params).then(data => this.setState({institution: data[0]}));
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row' style={{marginTop: '3%'}}>
              <div className='col-md-3'>
                {this.state.institution.id &&
                  <InstitutionCard
                    id={this.state.institution.id}
                    code={this.state.institution.code}
                    name={this.state.institution.name}
                  />}
              </div>
              <div className='col-md-9'>
                <p className='result-text'>
                  {
                    this.state.institution.procedures.length > 1
                    ?
                      'La institución cuenta con ' +
                      this.state.institution.procedures.length +
                      ' trámites:'
                    :
                      this.state.institution.procedures.lenght === 1
                    ?
                      'La institución cuenta con un trámite:'
                    :
                      'No se encontraron resultados.'
                  }
                </p>
                <ProcedureList procedures={this.state.institution.procedures} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}