import React from 'react';
import { shallow } from 'enzyme';
import RequirementElement from './Element';
import RequirementName from './Name';
import RequirementDescription from './Description';
import URL from '../UI/URL/URL';

let name, description, url, wrapper;

beforeEach(() => {
  name = 'Requirement of test';
  description = 'The description for the Requirement of test';
  url = {
    href: 'https://google.com',
    text: 'Go to Google'
  }
  wrapper = shallow(<RequirementElement name={name} description={description} url={url}/>);
});

it('should display a RequirementName component', () => {
  expect(wrapper.find(RequirementName).length).toEqual(1);
});

it('should display a RequirementDescription component', () => {
  expect(wrapper.find(RequirementDescription).length).toEqual(1);
});

it('should display an URL component', () => {
  expect(wrapper.find(URL).length).toEqual(1);
});
