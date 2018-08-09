import React from 'react';
import { shallow } from 'enzyme';
import ProcedureElement from './Element';
import ProcedureName from './Name';
import ProcedureDetail from './Detail';

let name, detail, wrapper;

beforeEach(() => {
  name = 'Procedure of test';
  detail = 'The detail for the Procedure of test';
  wrapper = shallow(<ProcedureElement name={name} detail={detail} />);
});

it('should display a ProcedureName component', () => {
  expect(wrapper.find(ProcedureName).length).toEqual(1);
});

it('should display a ProcedureDetail component', () => {
  expect(wrapper.find(ProcedureDetail).length).toEqual(1);
});
