import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class RequirementDescription extends Component {
  render() {
    return (
      <i className='requirementDescription'>{this.props.text}</i>
    )
  }
}

RequirementDescription.propTypes = {
  text: PropTypes.string.isRequired
};
