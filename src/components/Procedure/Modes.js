import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

import './Modes.css';
import CategoriesTags from '../Category/Tags';

export default class ProcedureModes extends Component {
  render() {
    return (
      <div className='procedureMode'>
        {
          this.props.modes.map(mode => (
            <div key={mode.id} style={{ marginBottom: '2em' }}>
              <Link to={`/modalidades/${mode.id}`}>
                <span className='modeName'>{mode.name}</span>
                <br />
                <p className='description'>{mode.description}</p>
              </Link>
              <CategoriesTags categories={mode.categories} />
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
