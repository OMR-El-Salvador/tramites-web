import React from 'react';
import { shallow } from 'enzyme';
import ProcedureMode from './Mode';

it('should render a procedure mode', () => {
  const text = 'For under age applicant';
  const wrapper = shallow(<ProcedureMode text={text} />);

  expect(wrapper.text()).toEqual(text);
});
