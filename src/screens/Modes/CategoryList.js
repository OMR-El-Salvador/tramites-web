import React, { Component } from 'react';

import '../../services/http';
import { HttpService } from '../../services/http';

import ProcedureList from '../../components/Procedure/List';

export default class ModesCategoryListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat_id: this.props.match.params.id,
      procedures: []
    };
  }

  componentDidMount() {
    let resPath = 'rpc/modes_by_cat';
    let columnsPath = 'select=id,name,description,procedure:procedures(id,code,name)';
    let params = '?'+columnsPath+'&order=procedure_id&cat_id=' + this.state.cat_id;

    let formatData = function(parent, data) {
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
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                {this.state.procedures.length > 0 ? (
                  <div>
                    <br />
                    <h4>{this.state.procedures.length} trámites están asociados a la categoría.</h4>
                    <ProcedureList procedures={this.state.procedures} />
                  </div>
                ) : (
                  <h6>No se encontró información.</h6>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}