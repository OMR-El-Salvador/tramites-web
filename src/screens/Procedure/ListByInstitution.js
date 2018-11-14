import React, { Component } from 'react';

import '../../services/http';

import ProcedureList from '../../components/Procedure/List';
import { HttpService } from '../../services/http';
import InstitutionCard from '../../components/Institutions/Card';
import Loading from '../../components/UI/Loading';

export default class ProcedureListByRelatedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      institution: { procedures: [ ] },
      status: 'loading'
    };
  }

  componentDidMount() {
    let resPath = 'institutions';
    let proceduresPath = 'procedures(id,name,code,modes(id,name,code,description))';
    let order = '&procedures.order=name'
    let params = '?select=id,name,code,' + proceduresPath + '&id=eq.' + this.state.id + order;
    HttpService.getResource(resPath, params).then(
      data => this.setState({ institution: data[0], status: 'success' })
    );
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
                {this.state.status === 'loading' ?
                <div className='text-center'><Loading /></div> :
                <div>
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
                </div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}