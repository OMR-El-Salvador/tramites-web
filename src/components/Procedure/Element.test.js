import React from 'react';
import { shallow } from 'enzyme';
import ProcedureElement from './Element';
import ProcedureName from './Name';
import ProcedureMode from './Mode';

let name, mode, wrapper;

beforeEach(() => {
  name = 'Procedure of test';
  mode = 'The mode for the Procedure of test';
  wrapper = shallow(<ProcedureElement name={name} id="6" mode={mode} />);
});

it('should display a ProcedureName component', () => {
  expect(wrapper.find(ProcedureName).length).toEqual(1);
});

it('should display a ProcedureMode component', () => {
  expect(wrapper.find(ProcedureMode).length).toEqual(1);
});
