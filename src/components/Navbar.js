import React from 'react'
import { NavLink } from 'react-router-dom'

export const CustomNavbar = () => {
  return (
    <nav className='navbar navbar-expand-lg custom-navbar'>
      <span className='navbar-brand logo' />
      <button
        className='navbar-toggler'
        // type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div className='w-100'>
          <span className='d-none d-lg-block text-danger mb-2'>My Account</span>
          <ul className='navbar-nav navs-ul'>
            <li className='nav-item active'>
              <NavLink to='/'>Main</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li className='nav-item li-last'>
              <NavLink to='/contacts'>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
