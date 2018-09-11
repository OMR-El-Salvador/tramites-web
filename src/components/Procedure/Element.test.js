import React from 'react';
import { shallow } from 'enzyme';
import ProcedureElement from './Element';
import ProcedureName from './Name';
import ProcedureModes from './Modes';

let name, desc, modes, id, wrapper;

beforeEach(() => {
  name = 'Procedure of test';
  modes = ['The mode for the Procedure of test', 'This is for natural persons',
    'This is for companies'];
  desc = 'And gosh vicious trenchant less cat neutral due oh factious owl lemur' +
    'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly' +
    'yikes amongst near much over tepid dear less the octopus wrung emptied.',
  id = 6;
  wrapper = shallow(<ProcedureElement name={name} description={desc} id={id} modes={modes} />);
});

it('should display a ProcedureName component', () => {
  expect(wrapper.find(ProcedureName).length).toEqual(1);
});

it('should display a ProcedureModes component', () => {
  expect(wrapper.find(ProcedureModes).length).toEqual(1);
});
