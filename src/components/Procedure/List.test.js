import React from 'react';
import { shallow } from 'enzyme/build';
import ProcedureList from './List';
import ProcedureElement from './Element';

let mockProcedures, wrapper;

beforeEach(() => {
  mockProcedures = [
    {
      id: 1,
      name: 'Procedure A',
      description: 'And gosh vicious trenchant less cat neutral due oh factious owl lemur'+
          'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly'+
          'yikes amongst near much over tepid dear less the octopus wrung emptied.',
      modes: [
        { id: 1, text: 'For natural persons' },
        { id: 2, text: 'For companies' },
        { id: 3, text: 'For under age applicants' },
      ]
    },
    {
      id: 2,
      name: 'Procedure B',
      description: 'And gosh vicious trenchant less cat neutral due oh factious owl lemur'+
          'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly'+
          'yikes amongst near much over tepid dear less the octopus wrung emptied.',
      modes: [
        { id: 1, text: 'For natural persons' },
        { id: 2, text: 'For companies' },
        { id: 3, text: 'For under age applicants' },
      ]
    },
    {
      id: 3,
      name: 'Procedure C',
      description: 'And gosh vicious trenchant less cat neutral due oh factious owl lemur'+
          'accordingly playfully flashy amongst the inanimately adversely like scorpion grudgingly'+
          'yikes amongst near much over tepid dear less the octopus wrung emptied.',
      modes: [
        { id: 1, text: 'For natural persons' },
        { id: 2, text: 'For companies' },
        { id: 3, text: 'For under age applicants' },
      ]
    }
  ];
  wrapper = shallow(<ProcedureList procedures={mockProcedures}/>);
});

it('should render a ProcedureElement item for every procedure in `props.procedures`', () => {
  expect(wrapper.find(ProcedureElement).length).toEqual(mockProcedures.length);
});
