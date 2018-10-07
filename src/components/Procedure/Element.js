import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProcedureName from './Name';
import ProcedureModes from './Modes';

export default class ProcedureElement extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() { this.setState({ expanded: !this.state.expanded }); }

  render() {
    return (
      <div className='procedureElement'>
        <div
            className='procedureHeader'
            id={'heading-card-'+this.props.id}
            data-toggle='collapse'
            data-target={'#procedureCollapse'+this.props.id}
            aria-expanded='true'
            aria-controls={'procedureCollapse'+this.props.id}
            onClick={this.handleClick}>
          <span className={'fas '+(this.state.expanded?'fa-minus':'fa-plus')}></span>&nbsp;
          <ProcedureName text={this.props.name} />
        </div>
        <div
            className='collapse'
            id={'procedureCollapse'+this.props.id}
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
