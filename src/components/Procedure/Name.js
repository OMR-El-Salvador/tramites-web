import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProcedureName extends Component {
  render() {
    return (
      <span className='procedureName'>{this.props.text}</span>
    )
  }
}

ProcedureName.propTypes = {
  text: PropTypes.string.isRequired
};