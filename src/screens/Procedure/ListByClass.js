import React, { Component } from 'react';

import '../../services/http';

import ProcedureList from '../../components/Procedure/List';
import { HttpService } from '../../services/http';
import ClassCard from '../../components/Classes/Card';
import Loading from '../../components/UI/Loading';

export default class ProcedureListByClassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      procedures: [],
      class: null,
      status: 'loading'
    };
  }

  componentDidMount() {
    let resPath = 'rpc/modes_by_class';
    let columnsPath = 'select=id,name,description,procedure:procedures(id,code,name)';
    let params = '?' + columnsPath + '&class_id=' + this.state.id;

    let classPath = 'classes?id=eq.' + this.state.id;

    let formatData = function(parent, data) {
      console.log(data);
      if (data.length===0) return [];

      let prevPc = null;
      let rs = [];
      data.forEach(mode => {
        let proc = mode.procedure;
        if (prevPc !== proc.id) rs.push({id: proc.id, name: proc.name, code: proc.code, modes: []})

        prevPc = proc.id;
        rs[rs.length-1].modes.push({ id: mode.id, name: mode.name, description: mode.description });
      });
      parent.setState({procedures: rs})
    };

    HttpService.getResource(resPath, params).then(data => formatData(this, data));
    HttpService.getResource(classPath).then(
      data => this.setState({ class: data[0], status: 'success'})
    );
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row' style={{marginTop: '3%'}}>
              <div className='col-md-3'>
                {this.state.class &&
                  <ClassCard
                    id={this.state.class.id}
                    code={this.state.class.code}
                    name={this.state.class.name}
                  />}
              </div>
              <div className='col-md-9'>
                {this.state.status === 'loading' ?
                <div className='text-center'><Loading /></div> :
                <div>
                  <p className='result-text'>
                    {
                      this.state.procedures.length > 1
                      ?
                        this.state.procedures.length +
                        ' trámites están relacionados con la clase:'
                      :
                        this.state.procedures.lenght === 1
                      ?
                        'La clase cuenta con un trámite relacionado:'
                      :
                        'No se encontraron resultados.'
                    }
                  </p>
                  <ProcedureList procedures={this.state.procedures} />
                </div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}