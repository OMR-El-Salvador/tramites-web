import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from '../UI/Address/Address';

export default class OfficeInfo extends Component {
  render() {
    return (
      <div className='officeInfo'>
        <Address
          text={this.props.address}
          municipality={this.props.municipality}
          department={this.props.department}
        />
        {this.props.schedule &&
          <div className='infoItem scheduleItem'>
            Horario de atención: <span className='schedule'>{this.props.schedule}</span>
          </div>
        }
        {this.props.responsible &&
          <div className='infoItem responsibleItem'>
            Responsable: <span className='responsible'>{this.props.responsible}</span>
          </div>
        }
        {this.props.position &&
          <div className='infoItem positionItem'>
            Cargo: <span className='position'>{this.props.position}</span>
          </div>
        }
        {this.props.mail &&
          <div className='infoItem mailItem'>
            Correo: <span className='mail'>{this.props.mail}</span>
          </div>
        }
        {this.props.phone &&
          <div className='infoItem phoneItem'>
            Teléfono: <span className='phone'>{this.props.phone}</span>
          </div>
        }
      </div>
    )
  }
}

OfficeInfo.propTypes = {
  address: PropTypes.string.isRequired,
  municipality: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  schedule: PropTypes.string,
  responsible: PropTypes.string,
  position: PropTypes.string,
  mail: PropTypes.string,
  phone: PropTypes.string
};
