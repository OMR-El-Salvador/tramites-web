import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class URL extends Component {
  render() {
    return (
      <a href={this.props.href}>{this.props.text} <i className='pull-right fas fa-external-link-alt action-icon'></i></a>
    )
  }
}

URL.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};