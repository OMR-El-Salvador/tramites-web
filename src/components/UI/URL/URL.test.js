import React from 'react';
import { shallow } from 'enzyme';
import URL from './URL';

let href, text, wrapper;

beforeEach(() => {
  href = 'https://google.com';
  text = 'Google';
  wrapper = shallow(<URL href={href} text={text} />);
});

it('should render an <a> element with a display text', () => {
  expect(wrapper.find('a').contains(text)).toEqual(true);
});

it('should render an <a> element with a reference', () => {
  expect(wrapper.find('a').prop('href')).toEqual(href);
});
