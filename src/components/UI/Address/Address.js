import React, { Component } from 'react';
import PropTypes from 'prop-types';

const elementStyle = { marginTop: '0.5em' }

export default class Address extends Component {
  render() {
    return (
      <div>
        <div className='row' style={elementStyle}>
          <div className='col-md-12'><strong>{this.props.municipality}</strong></div>
        </div>
        <div className='row' style={elementStyle}>
          <div className='col-md-12'>{this.props.detail}.</div>
        </div>
        <div className='row' style={elementStyle}>
          <div className='col-md-12'>
            <i className='text-warning fas fa-clock'></i>
            &nbsp;{this.props.schedule}.
          </div>
        </div>
        <div className='row' style={elementStyle}>
          <div className='col-md-6'>
            <i className='text-warning fas fa-user'></i>
            &nbsp;{this.props.responsible}.
          </div>
          <div className='col-md-6'>
            <i className='text-warning fas fa-crosshairs'></i> {this.props.position}.
          </div>
        </div>
        <div className='row' style={elementStyle}>
          <div className='col-md-6'>
            <i className='text-warning fas fa-phone'></i>
            &nbsp;{this.props.phone}
          </div>
          <div className='col-md-6'>
            <i className='text-warning fas fa-envelope'></i>
            &nbsp;<a href={'mailto:' + this.props.email}>{this.props.email}</a>
          </div>
        </div>
        <hr />
      </div>
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