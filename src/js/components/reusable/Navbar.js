import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../actions/verification'
import { BtnInput, BtnLink } from './Buttons'

const Navbar = ({auth, logoutUser, history, info}) => {
  return(
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <a className="navbar-brand" href="#"></a>
      <button className="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#Content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="Content">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to='/'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to='/login'>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to='/homepage'>Homepage</NavLink>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          {
            !auth ? null : <span className='mr-2 d-none d-md-inline text-muted text-capitalize'>Hello, {info.name}</span>
          }
          {
            !auth ? <BtnLink to='/login' title='Log in' classes='btn-outline-success my-2 my-sm-0' />
            : <BtnInput title='Sign out' classes='btn-outline-success my-2 my-sm-0' onClick={() => logoutUser(history)} />
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
