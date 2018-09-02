import React from 'react';
import { shallow } from 'enzyme';
import ProcedureModes from './Modes';

let wrapper, mockModes;

beforeEach(() => {
  mockModes = [
    { id: 1, text: 'For natural persons' },
    { id: 2, text: 'For companies' },
    { id: 3, name: 'For under age applicants' },
  ];
  wrapper = shallow(<ProcedureModes modes={mockModes} />);
});

it('should render a mode item for every mode in `props.modes`', () => {
  expect(wrapper.find('.procedureMode').length).toEqual(mockModes.length);
});
