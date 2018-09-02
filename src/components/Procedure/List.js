import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureElement from './Element';

export default class ProcedureList extends Component {
  render() {
    return (
      <div id='procedure-accordion' className='procedureList'>
        {
          this.props.procedures.map(procedure => (
            <div className='card' key={procedure.id}>
              <ProcedureElement name={procedure.name} id={procedure.id} modes={procedure.modes}/>
            </div>
          ))
        }
      </div>
    )
  }
}

ProcedureList.propTypes = {
  procedures: PropTypes.array.isRequired
};