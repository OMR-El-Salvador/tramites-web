import React from 'react';
import { shallow } from 'enzyme';
import OfficeInfo from './Info';
import Address from '../UI/Address/Address';

let address, municipality, department;

beforeEach(() => {
  address = 'Around the bell tower';
  municipality = 'Winterfell';
  department = 'The North';
});

it('should display an Address component', () => {
  const wrapper =
    shallow(<OfficeInfo address={address} municipality={municipality} department={department} />);
  expect(wrapper.find(Address).length).toEqual(1);
});

it('should display the schedule for an Office inside a `schedule` class if provided', () => {
  const schedule = 'From 7:00pm to 4:00am';
  const wrapper = shallow(<OfficeInfo
    address={address} municipality={municipality} department={department} schedule={schedule} />);
  expect(wrapper.find('.schedule').text()).toEqual(schedule);
});

it('should not display any schedule info for an Office when not provided', () => {
  const wrapper =
    shallow(<OfficeInfo address={address} municipality={municipality} department={department} />);
  expect(wrapper.find('.scheduleItem').length).toEqual(0);
});

it('should display the responsible for an Office inside a `responsible` class if provided', () => {
  const responsible = 'Jon Snow';
  const wrapper = shallow(<OfficeInfo
    address={address} municipality={municipality} department={department} responsible={responsible} />);
  expect(wrapper.find('.responsible').text()).toEqual(responsible);
});

it('should not display any responsible info for an Office when not provided', () => {
  const wrapper =
    shallow(<OfficeInfo address={address} municipality={municipality} department={department} />);
  expect(wrapper.find('.responsibleItem').length).toEqual(0);
});

it('should display the position for an Office inside a `position` class if provided', () => {
  const position = 'Lord of Winterfell';
  const wrapper = shallow(<OfficeInfo
    address={address} municipality={municipality} department={department} position={position} />);
  expect(wrapper.find('.position').text()).toEqual(position);
});

it('should not display any position info for an Office when not provided', () => {
  const wrapper =
    shallow(<OfficeInfo address={address} municipality={municipality} department={department} />);
  expect(wrapper.find('.positionItem').length).toEqual(0);
});

it('should display the mail for an Office inside a `mail` class if provided', () => {
  const mail = 'lord@winterfell.gov';
  const wrapper = shallow(<OfficeInfo
    address={address} municipality={municipality} department={department} mail={mail} />);
  expect(wrapper.find('.mail').text()).toEqual(mail);
});

it('should not display any mail info for an Office when not provided', () => {
  const wrapper =
    shallow(<OfficeInfo address={address} municipality={municipality} department={department} />);
  expect(wrapper.find('.mailItem').length).toEqual(0);
});

it('should display the phone for an Office inside a `phone` class if provided', () => {
  const phone = '+23 321 2239';
  const wrapper = shallow(<OfficeInfo
    address={address} municipality={municipality} department={department} phone={phone} />);
  expect(wrapper.find('.phone').text()).toEqual(phone);
});

it('should not display any phone info for an Office when not provided', () => {
  const wrapper =
    shallow(<OfficeInfo address={address} municipality={municipality} department={department} />);
  expect(wrapper.find('.phoneItem').length).toEqual(0);
});
