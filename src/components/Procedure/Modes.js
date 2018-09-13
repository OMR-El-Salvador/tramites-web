import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

export default class ProcedureModes extends Component {
  render() {
    return (
      <div className='row well'>
        {
          this.props.modes.map(mode => (
            <div className='col-md-3' key= {mode.id}>
              <p className='procedureMode'>{mode.text} </p>
              <Link to={`/procedures/${mode.id}`}>Detalle</Link>
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