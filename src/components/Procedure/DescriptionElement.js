import React, { Component } from 'react';
import PropTypes from 'prop-types';

const generalElementStyle = {
  marginTop: '0.5em'
}

export default class ProcedureDescriptionElement extends Component {
  render() {
    return (
      <div style={generalElementStyle}><h5>{this.props.header}</h5>{this.props.body}</div>
    )
  }
}

ProcedureDescriptionElement.propTypes = {
  header: PropTypes.string,
  body: PropTypes.any.isRequired
};
