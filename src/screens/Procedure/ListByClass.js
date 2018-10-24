import React, { Component } from 'react';

import '../../services/http';

import ProcedureList from '../../components/Procedure/List';
import { HttpService } from '../../services/http';
import ClassCard from '../../components/Classes/Card';

export default class ProcedureListByClassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      class: { procedures: [ ] }
    };
  }

  componentDidMount() {
    let resPath = 'classes';
    let proceduresPath = 'procedures(id,name,code,modes(id,name,code,description))';
    let params = '?select=id,name,code,' + proceduresPath + '&id=eq.' + this.state.id;
    HttpService.getResource(resPath, params).then(data => this.setState({class: data[0]}));
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row' style={{marginTop: '3%'}}>
              <div className='col-md-3'>
                {this.state.class.id &&
                  <ClassCard
                    id={this.state.class.id}
                    code={this.state.class.code}
                    name={this.state.class.name}
                  />}
              </div>
              <div className='col-md-9'>
                <p className='result-text'>
                  {
                    this.state.class.procedures.length > 1
                    ?
                      this.state.class.procedures.length +
                      ' trámites están relacionados con la clase:'
                    :
                      this.state.class.procedures.lenght === 1
                    ?
                      'La clase cuenta con un trámite relacionado:'
                    :
                      'No se encontraron resultados.'
                  }
                </p>
                <ProcedureList procedures={this.state.class.procedures} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}