import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureName from './Name';
import ProcedureMode from './Mode';

export default class ProcedureElement extends Component {
  render() {
    return (
      <div className="procedureElement">
        <ProcedureName text={this.props.name} />
        <ProcedureMode text={this.props.mode} />
      </div>
    )
  }
}

ProcedureElement.propTypes = {
  name: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};
