import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  marginTop: '0.5em',
  letterSpacing: '0.005em'
}

export default class ProcedureDescriptionElement extends Component {
  render() { return <div style={style}><h5>{this.props.header}</h5>{this.props.body}</div> }
}

ProcedureDescriptionElement.propTypes = {
  header: PropTypes.string,
  body: PropTypes.any.isRequired
};
