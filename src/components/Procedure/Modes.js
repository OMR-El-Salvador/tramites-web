import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import './Modes.css';

export default class ProcedureModes extends Component {
  render() {
    return (
      <div className='procedureMode'>
        {
          this.props.modes.map(mode => (
            <div key={mode.id}>
              <Link to={`/modes/${mode.id}`}>
                <span className='modeName'>{mode.name}</span>
                <br />
                <p className='description'>{mode.description}</p>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

ProcedureModes.propTypes = {
  modes: PropTypes.array.isRequired
};
