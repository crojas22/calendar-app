import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../actions/verification'
import { BtnInput, BtnLink } from './Buttons'


class Navbar extends Component{
  state = {
    isDown: false
  }

  componentDidMount() {
    this.onScroll()
  }

  componentWillUnmount() {
    this.onScroll()
  }

  onScroll = () => {
    document.addEventListener("scroll", () => {
      window.scrollY > 100 ? this.setState({ isDown: true })
      : this.setState({ isDown: false })
    })
  }

  render() {
    const {auth, logoutUser, history, info} = this.props
    return(
      <nav className={"navbar navbar-expand-md fixed-top " +
      (this.props.path !== '/' ? 'bg-light navbar-light' : this.props.path === '/'
      && this.state.isDown ? 'bg-grey navbar-light' : 'bg-transparent navbar-dark')}>

        <a className="navbar-brand" href="#"></a>
        <button className="border-0 navbar-toggler" type="button"
        data-toggle="collapse" data-target="#Content">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="Content">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to='/calendar'>myCalendar</NavLink>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {
              !auth ? null : <span className='mr-2 d-none d-md-inline text-muted text-capitalize'>Hello, {info.name}</span>
            }
            {
              !auth ? <BtnLink to='/login' title='Log in' classes='btn-success my-2 my-sm-0' />
              : <BtnInput title='Sign out' classes='btn-success my-2 my-sm-0' onClick={() => logoutUser(history)} />
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
