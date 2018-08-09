import React from 'react';
import { shallow } from 'enzyme';
import RequirementName from './Name';

it('should render a requirement name', () => {
  const name = 'Requirement I';
  const wrapper = shallow(<RequirementName text={name} />);

  expect(wrapper.text()).toEqual(name);
});
