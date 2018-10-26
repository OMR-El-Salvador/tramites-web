import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HttpService } from '../../../services/http';
import Address from './Address';

export default class AddressesList extends Component {
  constructor(props) { super(props); this.state = { id: this.props.id, data: {}, status: 'load' }; }

  componentDidMount() {
    let resPath = 'addresses';
    let munPath = 'municipality(id,name,department(id,name))';
    let params = '?select=*,' + munPath + '&order=municipality_id&mode_id=eq.' + this.state.id;

    HttpService.getResource(resPath, params).then(data => {
      if (data.length > 0) {
        let result = {};
        let prevDptName = null;
        data.forEach(address => {
          let municipality = address.municipality;
          let currDptName = municipality.department.name;

          if (currDptName !== prevDptName)
            result[currDptName] = {
              id: municipality.department.id,
              name: currDptName,
              addresses: []
            };
          
          result[currDptName]['addresses'].push({
            id: address.id,
            municipality: municipality.name,
            detail: address.detail,
            schedule: address.schedule,
            phone: address.phone,
            responsible: address.responsible_name,
            position: address.responsible_position,
            email: address.email
          })

          prevDptName = currDptName
        });
        this.setState({status: 'success', data: result});
      } else this.setState({status: 'empty'});
    });
  }

  render() {
    return (
      <div id='accordion' className='accordion'>
        {this.state.status === 'success' && (
          Object.keys(this.state.data).map((key) => (
            <div key={this.state.data[key].id} className='card border-light'>
              <div
                id={'heading-' + this.state.data[key].id}
                className='card-header collapsed'
                data-toggle='collapse'
                data-target={'#collapse-' + this.state.data[key].id}
                aria-expanded='false'
                aria-controls={'collapse-' + this.state.data[key].id}
                style={{backgroundColor: 'white'}}
              >
                <a style={{fontWeight: '450', fontSize: '1.2em'}}>
                  {this.state.data[key].name}
                </a>
              </div>
              <div
                id={'collapse-' + this.state.data[key].id}
                className='collapse'
                aria-labelledby={'heading-'+this.state.data[key].id}
                data-parent='#accordion'>
                <div className='card-body text-secondary'>
                  {this.state.data[key].addresses.map(addr => (
                    <Address
                      key={addr.id}
                      detail={addr.detail}
                      municipality={addr.municipality}
                      schedule={addr.schedule}
                      phone={addr.phone}
                      responsible={addr.responsible}
                      position={addr.position}
                      email={addr.email}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    )
  }
}

AddressesList.propTypes = { id: PropTypes.number.isRequired };