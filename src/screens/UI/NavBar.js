import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark' id='pb-navbar'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>gob.sv</Link>
          <button className='navbar-toggler ml-auto' type='button' data-toggle='collapse' data-target='#probootstrap-navbar' aria-controls='probootstrap-navbar'
            aria-expanded='false' aria-label='Toggle navigation'>
            <span><i className='ion-navicon'></i></span>
          </button>
          <div className='collapse navbar-collapse' id='probootstrap-navbar'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'><Link className='nav-link' to='/data'>Datos</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/categories'>Categorías</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/about'>Acerca de</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/contact'>Contacto</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/faq'>Preguntas frecuentes</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
