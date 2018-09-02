import React from 'react';
import { shallow } from 'enzyme';
import ProcedureElement from './Element';
import ProcedureName from './Name';
import ProcedureModes from './Modes';

let name, modes, id, wrapper;

beforeEach(() => {
  name = 'Procedure of test';
  modes = ['The mode for the Procedure of test', 'This is for natural persons',
    'This is for companies'];
  id = 6;
  wrapper = shallow(<ProcedureElement name={name} id={id} modes={modes} />);
});

it('should display a ProcedureName component', () => {
  expect(wrapper.find(ProcedureName).length).toEqual(1);
});

it('should display a ProcedureModes component', () => {
  expect(wrapper.find(ProcedureModes).length).toEqual(1);
});
