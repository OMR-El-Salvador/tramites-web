import React, { Component } from 'react';
import PropTypes from 'prop-types';
import URL from '../../components/UI/URL/URL';

export default class FormList extends Component {
  render() {
    return (
      (this.props.forms ? (
        <table className='table table-hover'>
          <thead><tr><th>Nombre</th><th>Enlace</th></tr></thead>
          <tbody>
            {
              this.props.forms.map(form => (
                <tr key={form.id}>
                  <td style={{fontWeight: '500'}}>{form.name}</td>
                  <td>{form.url && <span><URL href={form.url} text='En línea' /></span>}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        ) : (<p style={{fontWeight: '500'}}>No posee formularios.</p>)
      )
    )
  }
}

FormList.propTypes = {
  forms: PropTypes.array
};
