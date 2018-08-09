import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Municipality from './Municipality';

export default class Address extends Component {
  render() {
    return (
      <div className='address'>
        <div className='addressText'>{this.props.text}</div>
        <Municipality name={this.props.municipality} department={this.props.department} />
      </div>
    )
  }
}

Address.propTypes = {
  text: PropTypes.string.isRequired,
  municipality: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
};