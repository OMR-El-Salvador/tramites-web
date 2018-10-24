import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProcedureName from './Name';
import ProcedureModes from './Modes';

export default class ProcedureElement extends Component {
  render() {
    return (
      <div className='procedureElement'>
        <ProcedureName text={this.props.name} />
        <div>{this.props.code}</div>
        <ProcedureModes modes={this.props.modes} />
      </div>
    )
  }
}

ProcedureElement.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  modes: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};
