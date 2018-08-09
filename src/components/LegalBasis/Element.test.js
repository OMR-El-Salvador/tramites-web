import React from 'react';
import { shallow } from 'enzyme';
import LegalBasisElement from './Element';
import LegalBasisRegulation from './Regulation';

let theme, mockRegulations;

beforeEach(() => {
  theme = 'Procedure origin';
  mockRegulations = [
    {id: 1, name: 'A legal law', reference: '3rd page, character 45'},
    {id: 2, name: 'The law of fake', reference: 'Article 53'},
    {id: 3, name: 'Just a Bylaw', reference: '5th paragraph'}
  ];
});

it('should display the theme for a Legal Basis inside a `legalBasisTheme` class element', () => {
  const wrapper = shallow(<LegalBasisElement theme={theme} />);
  expect(wrapper.find('.legalBasisTheme').text()).toEqual(theme);
});

it('should display a list of Regulations components for a Legal Basis if provided', () => {
  const wrapper = shallow(<LegalBasisElement theme={theme} regulations={mockRegulations} />);
  expect(wrapper.find(LegalBasisRegulation).length).toEqual(mockRegulations.length);
});

it('should not display a list of Regulations component for a Legal Basis if not provided', () => {
  const wrapper = shallow(<LegalBasisElement theme={theme} />);
  expect(wrapper.find(LegalBasisRegulation).length).toEqual(0);
});
