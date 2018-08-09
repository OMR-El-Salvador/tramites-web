import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RequirmentName extends Component {
  render() {
    return (
      <div className="requirementName">{this.props.text}</div>
    )
  }
}

RequirmentName.propTypes = {
  text: PropTypes.string.isRequired
};