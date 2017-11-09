import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BtnSubmit, BtnLink } from '../reusable/Buttons'

const Register = ({registration}) => {

  let _fullName, _email, _password, _confirm

  const handleSubmit = (e) => {
    e.preventDefault()
    registration(_fullName.value, _email.value, _password.value, _confirm.value)
    _fullName.value = '', _email.value = '', _password.value = '', _confirm.value = ''
  }

  return(
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-9 col-md-7 px-1'>
          <form onSubmit={handleSubmit} className='col-lg-12 mx-auto bg-white'>
            <h2>Register</h2>
            <div className='form-group'>

              <input type='text' name='name' ref={(input) => _fullName = input}
              className='form-control w-75' placeholder='Full name' required/>

            </div>
            <div className='form-group'>

              <input type='email' name='email' ref={(input) => _email = input}
              className='form-control w-75' placeholder='Email' required/>

            </div>
            <div className='form-group'>

              <input type='password' name='password' ref={(input) => _password = input}
              className='form-control w-75' placeholder='Password' required/>

            </div>
            <div className='form-group'>

              <input type='password' name='confirm' ref={input => _confirm = input}
              className='form-control w-75' placeholder='Confirm password' required/>

            </div>
            <div className='col-xs-12'>

              <BtnSubmit title='Register' classes='btn-outline-success' />

            </div>
            <div className='col-xs-12'>

              <BtnLink to='/login' title='Click here to log in'
              classes='btn btn-primary btn-lg btn-block' />

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
