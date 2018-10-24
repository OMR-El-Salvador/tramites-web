import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RequirementElement from './Element';

const mockRequirements = [
  {
    id: 1,
    name: 'Solicitud de traslado, especificando las características del equipo y la dirección',
    description: 'A description for Requirement A',
    url: {
      href: 'http://omr.gob.sv',
      text: 'Link for Requirement A'
    }
  },
  {
    id: 2,
    name: 'Cartel original que se emitió al momento de la autorización',
    description: 'A description for Requirement B',
    url: {
      href: 'http://omr.gob.sv',
      text: 'Link for Requirement B'
    }
  }
]

export default class RequirementList extends Component {
  render() {
    let requirements = this.props.requirements ? this.props.requirements : mockRequirements;

    return (
      <div className='requirementList'>
        <ol type='a'>
          {
            requirements.map(requirement => (
              <li key={requirement.id}>
                <RequirementElement
                  name={requirement.name}
                  description={requirement.description}
                  url={requirement.url}
                />
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

RequirementList.propTypes = {
  requirements: PropTypes.array,
};