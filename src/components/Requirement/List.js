import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { HttpService } from '../../services/http';
import RequirementElement from './Element';
import Loading from '../UI/Loading';
import Error from '../UI/Error';

export default class RequirementList extends Component {
  constructor(props) {
    super(props);

    this.state = { id: this.props.id, data: {}, status: 'loading' };
  }

  componentDidMount() {
    let resPath = 'modes_requirements';
    let params = '?select=*,requirement(name)&mode_id=eq.' + this.state.id;

    HttpService.getResource(resPath, params).then(data => {
      if (data.length > 0) this.setState({status: 'success', data: data[0]});
      else this.setState({status: 'error'});
    });
  }

  render() {
    return (
      <div className='requirementList'>
        {this.state.status === 'success' && (
          <h3>Success</h3>
        )} {this.state.status === 'loading' &&
          <Loading />
        } {this.state.status === 'error' &&
          <Error />
        }
      </div>
    )
  }
}

RequirementList.propTypes = { id: PropTypes.number.isRequired };
