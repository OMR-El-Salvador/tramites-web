import React from 'react';
import { shallow } from 'enzyme';
import Municipality from './Municipality';
import Address from './Address';

let text, municipality, department, wrapper;

beforeEach(() => {
  text = 'Around the bell tower';
  municipality = 'Winterfell';
  department = 'The North';
  wrapper = shallow(<Address text={text} municipality={municipality} department={department} />);
});

it('should display the text for an Address inside a `addressText` class element', () => {
  expect(wrapper.find('.addressText').text()).toEqual(text);
});

it('should display a Municipality component', () => {
  expect(wrapper.find(Municipality).length).toEqual(1);
});
