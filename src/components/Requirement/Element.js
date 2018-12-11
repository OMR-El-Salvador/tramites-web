import React, { Component } from 'react';
import PropTypes from 'prop-types';

import URL from '../UI/URL/URL';

const elementStyle = { marginTop: '0.5em' }

export default class RequirementElement extends Component {
  render() {
    return (
      <div className='card-body text-secondary'>
        <div className='row' style={elementStyle}>
          <div className='col-md-12'><strong>{this.props.requirement.type.name}</strong></div>
        </div>
        {this.props.requirement.description &&
          <div className='row' style={elementStyle}>
            <div className='col-md-12'>{this.props.requirement.description}.</div>
          </div>
        }
        <div className='row' style={elementStyle}>
          {this.props.requirement.url &&
            <div className='col-md-6'>
              <i className='text-danger fas fa-external-link-alt'></i>
              &nbsp; Más información:
              &nbsp; <URL href={this.props.requirement.url} text='Enlace' />.
            </div>
          }
          {this.props.requirement.copies_amount &&
            <div className='col-md-6'>
              <i className='text-danger fas fa-file'></i>
              &nbsp; Numero de copias a presentar: {this.props.requirement.copies_amount}.
            </div>
          }
        </div>
        <hr />
      </div>
    )
  }
}

RequirementElement.propTypes = { requirement: PropTypes.object.isRequired };
