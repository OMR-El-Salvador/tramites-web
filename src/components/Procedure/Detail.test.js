import React from 'react';
import { shallow } from 'enzyme';
import ProcedureDetail from './Detail';

it('should render a procedure detail', () => {
  const name = 'This is the detail for procedure A, could this be long?';
  const wrapper = shallow(<ProcedureDetail text={name} />);

  expect(wrapper.text()).toEqual(name);
});
