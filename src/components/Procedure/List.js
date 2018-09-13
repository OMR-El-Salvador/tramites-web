import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureElement from './Element';

const itemStyle = {
  marginTop: '2em'
};

export default class ProcedureList extends Component {
  render() {
    return (
      <div id='procedure-accordion' className='procedureList'>
        {
          this.props.procedures.map(procedure => (
            <div key={procedure.id}
              style={itemStyle}>
              <ProcedureElement
                  name={procedure.name}
                  description={procedure.description}
                  id={procedure.id}
                  modes={procedure.modes}
                  />
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