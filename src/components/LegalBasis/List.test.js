import React from 'react';
import { shallow } from 'enzyme/build';
import LegalBasisList from './List';
import LegalBasisElement from './Element';

let mockLegalBasis, wrapper;

beforeEach(() => {
  let mockRegulations = [
    { id: 1, name: 'A legal law', reference: '3rd page, character 45' },
    { id: 2, name: 'The law of fake', reference: 'Article 53' },
    { id: 3, name: 'Just a Bylaw', reference: '5th paragraph' }
  ]

  mockLegalBasis = [
    {id: 1, theme: 'Legal basis A', regulations: mockRegulations},
    {id: 2, theme: 'Legal basis B', regulations: mockRegulations},
    {id: 3, theme: 'Legal basis C', regulations: mockRegulations}
  ];
  wrapper = shallow(<LegalBasisList legalBasis={mockLegalBasis}/>);
});

it('should render a LegalBasisElement item for every legalBasis in `props.legalBasis`', () => {
  expect(wrapper.find(LegalBasisElement).length).toEqual(mockLegalBasis.length);
});
