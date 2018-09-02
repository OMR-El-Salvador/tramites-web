import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProcedureName from './Name';
import ProcedureModes from './Modes';

export default class ProcedureElement extends Component {
  render() {
    return (
      <div className='procedureElement card-header'>
        <div className='card-header' id={'heading-card-'+this.props.id}>
          <h5 className='mb-0'>
            <button className='btn btn-link' data-toggle='collapse'
                data-target={'#procedureCollapse'+this.props.id}
                aria-expanded='true'
                aria-controls={'procedureCollapse'+this.props.id}>
              <ProcedureName text={this.props.name} />
            </button>
          </h5>
        </div>
        <div id={'procedureCollapse'+this.props.id}
            className='collapse'
            aria-labelledby={'heading-card-'+this.props.id}
            data-parent='#accordion'>
          <div className='card-body'>
            <ProcedureModes modes={this.props.modes} />
          </div>
        </div>
      </div>
    )
  }
}

ProcedureElement.propTypes = {
  name: PropTypes.string.isRequired,
  modes: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};
