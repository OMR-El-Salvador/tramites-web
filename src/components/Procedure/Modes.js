import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import './Modes.css';

export default class ProcedureModes extends Component {
  render() {
    return (
      <table className='table'>
        <tbody>
          {
            this.props.modes.map(mode => (
              <tr key={mode.id}>
                <td className='procedureMode'>
                  {mode.name}
                  <br />
                  <p id='description'>{mode.description}</p>
                </td>
                <td>
                  <Link to={`/procedures/${mode.id}`}>
                    <span>Ver detalle <i className='pull-right fas fa-external-link-alt action-icon'></i></span>
                  </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}

ProcedureModes.propTypes = {
  modes: PropTypes.array.isRequired
};
