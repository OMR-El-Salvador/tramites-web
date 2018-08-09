import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProcedureMode extends Component {
  render() {
    return (
      <h5 className='procedureMode'>{this.props.text}</h5>
    )
  }
}

ProcedureMode.propTypes = {
  text: PropTypes.string.isRequired
};