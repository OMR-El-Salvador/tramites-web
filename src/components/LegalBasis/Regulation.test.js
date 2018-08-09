import React from 'react';
import { shallow } from 'enzyme';
import LegalBasisRegulation from './Regulation';
import URL from '../UI/URL/URL';

let name, reference;

beforeEach(() => {
  name = 'The Book for regulation of test';
  reference = 'Article 432, paragraph 87-A';
});

it('should display the name for a Regulation inside a `regulationName` class element', () => {
  const wrapper = shallow(<LegalBasisRegulation name={name} reference={reference} />);
  expect(wrapper.find('.regulationName').text()).toEqual(name);
});

it('should display the ref for a Regulation inside a `regulationReference` class element', () => {
  const wrapper = shallow(<LegalBasisRegulation name={name} reference={reference} />);
  expect(wrapper.find('.regulationReference').text()).toEqual(reference);
});

it('should display an URL component if provided', () => {
  const url = {
    href: 'https://google.com',
    text: 'Go to Google'
  }
  const wrapper = shallow(<LegalBasisRegulation name={name} reference={reference} url={url} />);
  expect(wrapper.find(URL).length).toEqual(1);
});

it('should not display an URL component if not provided', () => {
  const wrapper = shallow(<LegalBasisRegulation name={name} reference={reference} url={null} />);
  expect(wrapper.find(URL).length).toEqual(0);
});
