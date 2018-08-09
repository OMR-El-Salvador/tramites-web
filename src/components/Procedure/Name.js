import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProcedureName extends Component {
  render() {
    return (
      <h3 className='procedureName'>{this.props.text}</h3>
    )
  }
}

ProcedureName.propTypes = {
  text: PropTypes.string.isRequired
};