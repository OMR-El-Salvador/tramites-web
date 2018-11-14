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
  render() {
    return (
      <div className='procedureList' style={listStyle}>
        {
          this.props.procedures.map(procedure => (
            <div key={procedure.id} style={itemStyle} className='row'>
              <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <InstitutionCard
                      id={procedure.institution.id}
                      code='default'
                      name={procedure.institution.name}
                    />
                  </div>
                </div>
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
        }
      </div>
    )
  }
}

ProcedureSearchResults.propTypes = {
  procedures: PropTypes.array.isRequired
};