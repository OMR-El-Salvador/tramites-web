import React from 'react';
import { shallow } from 'enzyme';
import Municipality from './Municipality';

let name, department, wrapper;

beforeEach(() => {
  name = 'Winterfell';
  department = 'The North';
  wrapper = shallow(<Municipality name={name} department={department} />);
});

it('should display the name for a Municipality inside a `municipalityName` class element', () => {
  expect(wrapper.find('.municipalityName').text()).toEqual(name);
});

it('should display the department for a Municipality in a `municipalityDepartment` class', () => {
  expect(wrapper.find('.municipalityDepartment').text()).toEqual(department);
});
