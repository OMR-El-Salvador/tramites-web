import React, { Component } from 'react';
import PropTypes from 'prop-types';

import URL from '../../components/UI/URL/URL';
import DefaultLogo from '../../img/default.png';

import ProcedureElement from './Element';

const listStyle = {
  fontWeight: '300',
  letterSpacing: '-0.07em',
  marginTop: '1em'
}

const itemStyle = {
  marginTop: '2em'
};

const cardElementStyle = {
  color: 'black',
  marginTop: '0.5em',
  fontWeight: '600',
  letterSpacing: '0.03em'
}

const cardImage = {
  maxWidth: '128px',
  maxHeight: '128px',
  width: 'auto',
  height: 'auto',
}

export default class ProcedureSearchResults extends Component {
  render() {
    return (
      <div className='procedureList' style={listStyle}>
        {
          this.props.procedures.map(procedure => (
            <div key={procedure.id} style={itemStyle} className='row'>
              <div className='col-md-3'>
                <div className='card'>
                  <div className='card-body'>
                    <img
                      style={cardImage}
                      className='mx-auto d-block card-img-top'
                      src={DefaultLogo}
                      alt='Logo institucional'
                    />
                    <h5 style={cardElementStyle} className='card-title'>
                      {procedure.institution.name}
                    </h5>
                  </div>
                </div>
              </div>
              <div className='col-md-9'>
                <ProcedureElement
                  name={procedure.name}
                  code={procedure.code}
                  id={procedure.id}
                  modes={procedure.modes}
                />
              </div>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}

ProcedureSearchResults.propTypes = {
  procedures: PropTypes.array.isRequired
};