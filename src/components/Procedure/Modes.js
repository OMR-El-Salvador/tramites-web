import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

export default class ProcedureModes extends Component {
  render() {
    return (
      <ul>
        {
          this.props.modes.map(mode => (
            <li key= {mode.id}>
              <Link to={`/procedures/${mode.id}`}>
                <em className='procedureMode'>{mode.text}</em>
              </Link>
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