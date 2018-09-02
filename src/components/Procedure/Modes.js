import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProcedureModes extends Component {
  render() {
    return (
      <ul>
        {
          this.props.modes.map(mode => (
            <li key= {mode.id}>
              <em className='procedureMode'>{mode.text}</em>
            </li>
          ))
        }
      </ul>
    )
  }
}

ProcedureModes.propTypes = {
  modes: PropTypes.array.isRequired
};