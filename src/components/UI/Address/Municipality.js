import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Municipality extends Component {
  render() {
    return (
      <div className='addressMunicipality'>
        <div className='municipalityName'>{this.props.name}</div>,
        <div className='municipalityDepartment'>{this.props.department}</div>
      </div>
    )
  }
}

Municipality.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
};