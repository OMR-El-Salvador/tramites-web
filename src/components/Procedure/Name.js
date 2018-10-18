import React, { Component } from 'react';
import PropTypes from 'prop-types';

const nameStyle = {
  fontSize: '1.4em'
};

export default class ProcedureName extends Component {
  render() {
    return (
      <span className='procedureName' style={nameStyle}>{this.props.text}</span>
    )
  }
}

ProcedureName.propTypes = {
  text: PropTypes.string.isRequired
};