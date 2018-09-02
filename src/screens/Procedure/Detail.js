import React, { Component } from 'react';

export default class ProcedureDetailScreen extends Component {
  render() {
    return (
      <section className="text-left" id="section-procedures">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-12">
              <h3 className="heading mb-3">
                ID: {this.props.match.params.id}
              </h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}