import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Address extends Component {
  render() {
    return (
      <p>
        <strong>{this.props.municipality}</strong> <br />
        {this.props.detail} <br />
        <i className='fas fa-clock'></i> {this.props.schedule}
        <br />
        <i className='fas fa-phone'></i> {this.props.phone} <br />
        <i className='fas fa-user'></i> {this.props.responsible} <br />
        <i className='fas fa-envelope'></i> {this.props.email}
      </p>
    )
  }
}

Address.propTypes = {
  detail: PropTypes.string.isRequired,
  municipality: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  responsible: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};