import React from 'react';
import { shallow } from 'enzyme/build';
import RequirementList from './List';
import RequirementElement from './Element';

let mockRequirements, wrapper;

beforeEach(() => {
  mockRequirements = [
    {
      id: 1,
      name: 'Requirement A',
      description: 'A description for Requirement A',
      url: {
        href: 'https://google.com',
        text: 'Link for Requirement A'
      }
    },
    {
      id: 2,
      name: 'Requirement B',
      description: 'A description for Requirement B',
      url: {
        href: 'https://google.com',
        text: 'Link for Requirement B'
      }
    },
    {
      id: 3,
      name: 'Requirement C',
      description: 'A description for Requirement C',
      url: {
        href: 'https://google.com',
        text: 'Link for Requirement C'
      }
    },
  ];
  wrapper = shallow(<RequirementList requirements={mockRequirements}/>);
});

it('should render a RequirementElement item for every requirement in `props.requirements`', () => {
  expect(wrapper.find(RequirementElement).length).toEqual(mockRequirements.length);
});
