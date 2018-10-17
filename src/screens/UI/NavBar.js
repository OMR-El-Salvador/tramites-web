import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark' id='pb-navbar'>
        <div className='container'>
          <Link className='navbar-brand site-title nav-site-title' to='/'>gob<span className='title-dot'></span>sv</Link>
          <button className='navbar-toggler ml-auto' type='button' data-toggle='collapse' data-target='#probootstrap-navbar' aria-controls='probootstrap-navbar'
            aria-expanded='false' aria-label='Toggle navigation'>
            <span><i className='fas fa-bars'></i></span>
          </button>
          <div className='collapse navbar-collapse' id='probootstrap-navbar'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'><Link className='nav-link' to='/data'>Datos</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/categories'>Categorías</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/about'>Acerca de</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
