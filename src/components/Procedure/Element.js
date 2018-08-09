import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureName from './Name';
import ProcedureDetail from './Detail';

export default class ProcedureElement extends Component {
  render() {
    return (
      <div className="procedureElement">
        <ProcedureName text={this.props.name} />
        <ProcedureDetail text={this.props.detail} />
      </div>
    )
  }
}

ProcedureElement.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired
};
