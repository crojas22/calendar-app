import React from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../actions/verification'
import BtnLink from './BtnLink'

const Navbar = ({auth, logoutUser, history, name}) => {
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
            !auth ? null : <span className='mr-2 d-none d-md-inline text-muted text-capitalize'>Hello, {name}</span>
          }
          {
            !auth ? <BtnLink to='/login' title='Log in' classes='rounded-0 btn btn-outline-success my-2 my-sm-0' />
              : <input type='button' value='Sign out' onClick={() => logoutUser(history)}
                className='rounded-0 btn btn-outline-success my-2 my-sm-0' />
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
