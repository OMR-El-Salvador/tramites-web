import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ProcedureDetail extends Component {
  render() {
    return (
      <p className="procedureDetail">{this.props.text}</p>
    )
  }
}

ProcedureDetail.propTypes = {
  text: PropTypes.string.isRequired
};
