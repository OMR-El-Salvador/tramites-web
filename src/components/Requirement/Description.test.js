import React from 'react';
import { shallow } from 'enzyme';
import RequirementDescription from './Description';

it('should render a requirement description', () => {
  const name = 'This is the description for requirement I, could this be long?';
  const wrapper = shallow(<RequirementDescription text={name} />);

  expect(wrapper.text()).toEqual(name);
});
