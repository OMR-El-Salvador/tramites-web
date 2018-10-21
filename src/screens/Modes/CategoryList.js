import React, { Component } from 'react';

import '../../services/http';
import { HttpService } from '../../services/http';

import ProcedureList from '../../components/Procedure/List';
import CategoryCard from '../../components/Category/Card';

export default class ModesCategoryListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat_id: this.props.match.params.id,
      procedures: [],
      category: null
    };
  }

  componentDidMount() {
    let resPath = 'rpc/modes_by_cat';
    let columnsPath = 'select=id,name,description,procedure:procedures(id,code,name)';
    let params = '?'+columnsPath+'&order=procedure_id&cat_id=' + this.state.cat_id;

    let catPath = 'categories?id=eq.' + this.state.cat_id;

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
    HttpService.getResource(catPath).then(data => this.setState({category: data[0]}));
  }

  render() {
    return (
      <div>
        <section id='section-procedures'>
          <div className='container'>
            <div className='row' style={{marginTop: '3%'}}>
              <div className='col-md-3'>
                {this.state.category &&
                    <CategoryCard
                      id={this.state.category.id}
                      code={this.state.category.code}
                      name={this.state.category.name}
                      description={this.state.category.description}
                      />
                }
              </div>
              <div className='col-md-9'>
                {this.state.procedures.length > 0 ? (
                  <div>
                    <p className='result-text'>
                      {this.state.procedures.length}
                      {
                        this.state.procedures.length > 1 ?
                        ' trámites están asociados ' :
                        ' trámite está asociado '
                      }
                      a la categoría.
                    </p>
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