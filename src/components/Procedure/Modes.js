import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

export default class ProcedureModes extends Component {
  render() {
    return (
      <table className="table">
        <tbody>
          {
            this.props.modes.map(mode => (
              <tr key={mode.id}>
                <th scope="row" className='procedureMode'>{mode.text}</th>
                <td><Link to={`/procedures/${mode.id}`}>Detalle</Link></td>
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
