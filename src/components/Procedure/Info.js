import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LegalBasisList from "../LegalBasis/List";
import OfficeInfo from '../Office/Info';
import ProcedureName from './Name';
import ProcedureDetail from './Detail';

export default class ProcedureInfo extends Component {
  render() {
    return (
      <div className='procedureInfo'>
        <div className='procedureHeader'>
          <ProcedureName text={this.props.name} />
          <URL href={this.props.url} text={this.props.url} />
        </div>
        <div className='procedureDescription'><ProcedureDetail text={this.props.detail} /></div>
        <div className='procedureData'>
          <div className='procedureOffices'>
            <ul>
              {
                this.props.offices.map(office => (
                  <li key={office.id}>
                    <OfficeInfo
                      address={office.address}
                      municipality={office.municipality}
                      department={office.department}
                    />
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='procedureLegalBasis'>
            <LegalBasisList legalBasis={this.props.legalBasis} />
          </div>
        </div>
      </div>
    )
  }
}

ProcedureInfo.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  offices: PropTypes.array.isRequired,
  legalBasis: PropTypes.array.isRequired
};
