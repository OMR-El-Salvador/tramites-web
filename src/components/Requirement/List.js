import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HttpService } from '../../services/http';
import RequirementElement from './Element';
import Loading from '../UI/Loading';

export default class RequirementList extends Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.id, data: {}, status: 'loading' };
  }

  componentDidMount() {
    let resPath = 'modes_requirements';
    let params = '?select=*,type:requirement(name)&mode_id=eq.' + this.state.id;

    HttpService.getResource(resPath, params).then(data => {
      if (data.length > 0) this.setState({status: 'success', data: data});
      else this.setState({status: 'error'});
    });
  }

  render() {
    return (
      <div className='requirementList'>
        {this.state.status === 'success' && (
          <div className='card-header'>
            {this.state.data.map(requirement => (
              <RequirementElement key={requirement.id} requirement={requirement} />
            ))}
          </div>
        )}
        {this.state.status === 'loading' && <Loading />}
        {this.state.status === 'error' &&
          <div><p style={{fontWeight: '500'}}>No posee requisitos.</p><br /></div>
        }
      </div>
    )
  }
}

RequirementList.propTypes = { id: PropTypes.number.isRequired };
