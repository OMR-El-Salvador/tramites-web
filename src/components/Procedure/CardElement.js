import React, { Component } from 'react';
import PropTypes from 'prop-types';

const itemHeaderStyle = {
  fontWeight: '500'
}

export default class ProcedureCardElement extends Component {
  render() {
    return (
      <p>
        <span style={itemHeaderStyle}>{this.props.header}: </span>
        {this.props.body}.
      </p>
    )
  }
}

ProcedureCardElement.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired
};
