import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequirementElement from './Element';

export default class RequirementList extends Component {
  render() {
    return (
      <div className='requirementList'>
        <ul>
          {
            this.props.requirements.map(requirement => (
              <li key={requirement.id}>
                <RequirementElement
                  name={requirement.name}
                  description={requirement.description}
                  url={requirement.url}
                />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

RequirementList.propTypes = {
  requirements: PropTypes.array.isRequired
};