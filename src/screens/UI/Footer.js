import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className='pb_footer bg-light' role='contentinfo'>
        <div className='container'>
          <div className='row text-center'>
            <div className='col'>
              <ul className='list-inline'>
                <li className='list-inline-item'><a href='https://www.facebook.com/OMRsv/' className='p-2'><i className='fab fa-facebook'></i></a></li>
                <li className='list-inline-item'><a href='https://twitter.com/OMR_sv' className='p-2'><i className='fab fa-twitter'></i></a></li>
                <li className='list-inline-item'><a href='https://www.linkedin.com/company/omr-sv/' className='p-2'><i className='fab fa-linkedin'></i></a></li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col text-center'>
              <p className='pb_font-14'>Plantilla basada en 'Landing' por <a href='https://uicookies.com/'>uicookies.com</a></p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
