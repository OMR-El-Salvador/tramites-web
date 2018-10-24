import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureElement from './Element';

const listStyle = {
  fontWeight: '300',
  letterSpacing: '-0.07em',
  marginTop: '1em'
}

const itemStyle = {
  marginTop: '2em'
};

export default class ProcedureList extends Component {
  render() {
    return (
      <div className='procedureList' style={listStyle}>
        {
          this.props.procedures.map(procedure => (
            <div key={procedure.id}
              style={itemStyle}>
              <ProcedureElement
                  name={procedure.name}
                  code={procedure.code}
                  id={procedure.id}
                  modes={procedure.modes}
                  />
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}

ProcedureList.propTypes = {
  procedures: PropTypes.array.isRequired
};