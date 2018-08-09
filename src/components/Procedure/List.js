import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureElement from './Element';

export default class ProcedureList extends Component {
  render() {
    return (
      <div className="procedureList">
        <ul>
          {
            this.props.procedures.map(procedure => (
              <li key={procedure.id}>
                <ProcedureElement name={procedure.name} detail={procedure.detail}/>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

ProcedureList.propTypes = {
  procedures: PropTypes.array.isRequired
};