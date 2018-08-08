import React from 'react';
import { shallow } from 'enzyme';
import ProcedureName from './Name';

it('should render a procedure name', () => {
  const name = 'Procedure A';
  const wrapper = shallow(<ProcedureName text={name} />);

  expect(wrapper.text()).toEqual(name);
});
