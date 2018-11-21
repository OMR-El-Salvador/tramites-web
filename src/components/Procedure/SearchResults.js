import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProcedureElement from './Element';
import InstitutionCard from '../Institutions/Card';

const listStyle = {
  fontWeight: '300',
  letterSpacing: '-0.07em',
  marginTop: '1em'
}

const itemStyle = {
  marginTop: '2em'
};

export default class ProcedureSearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = { data: this.props.procedures, filter: '', filteredData: [] };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(ev) {
    let filter = ev.target.value;
    let fData = [];
    this.state.data.forEach(proc => {
      let findInTxt = (source, f) => { return source.toLowerCase().indexOf(f.toLowerCase()) > -1 }
      let inProc = findInTxt(proc.name, filter);
      let inMode = proc.modes.some(mode =>
        (findInTxt(mode.name, filter) || findInTxt(mode.description, filter))
      )

      if (filter && (inProc || inMode)) fData.push(proc)
    })
    this.setState({ filter: filter, filteredData: fData });
  }
  render() {
    return (
      <div className='procedureList' style={listStyle}>
        <div className='row'>
          <input
            value={this.state.filter}
            onChange={this.handleFilterChange}
            className='form-control'
            placeholder='Filtrar resultados'
            type='text' />
        </div>
        {this.state.filter !== '' &&
        <div className='row' style={{ marginTop: '0.5em'}}>
          <em>{this.state.filteredData.length} resultados filtrados.</em>
        </div>}
        {this.state.filter === '' && (
          this.props.procedures.map(procedure => (
            <div key={procedure.id} style={itemStyle} className='row'>
              <div className='col-md-3'>
                <InstitutionCard
                  id={procedure.institution.id}
                  code='default'
                  name={procedure.institution.name}
                />
              </div>
              <div className='col-md-9'>
                <ProcedureElement
                  name={procedure.name}
                  code={procedure.code}
                  id={procedure.id}
                  modes={procedure.modes}
                />
              </div>
              <hr />
            </div>
          ))
        )}
        {this.state.filter !== '' && (
          this.state.filteredData.map(procedure => (
            <div key={procedure.id} style={itemStyle} className='row'>
              <div className='col-md-3'>
                <InstitutionCard
                  id={procedure.institution.id}
                  code='default'
                  name={procedure.institution.name}
                />
              </div>
              <div className='col-md-9'>
                <ProcedureElement
                  name={procedure.name}
                  code={procedure.code}
                  id={procedure.id}
                  modes={procedure.modes}
                />
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    )
  }
}

ProcedureSearchResults.propTypes = {
  procedures: PropTypes.array.isRequired
};