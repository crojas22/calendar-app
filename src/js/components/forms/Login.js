import React from 'react'
import { Link } from 'react-router-dom'
import { BtnSubmit, BtnLink } from '../reusable/Buttons'

const Login = ({handleLogin, history}) => {

  let _email, _password

  const handleSubmit = e => {
    e.preventDefault()
    handleLogin(_email.value, _password.value, history)
    _email.value = '', _password.value = ''
  }

  return(
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='col-xs-12 col-sm-9 col-md-7 mt-5 px-1'>
          <form className='col-lg-12 bg-white mx-auto mt-5' onSubmit={handleSubmit}>
            <h2>Log in</h2>
            <div className='form-group'>
              <input type='email' name='email' className='form-control w-75'
                ref={input => _email = input}  placeholder='Email'required/>
            </div>
            <div className='form-group'>
            <input type='password' name='password' className='form-control w-75'
              ref={input => _password = input}  placeholder='Password' required/>
            </div>
            <div className='col-xs-12'>
              <BtnSubmit title='Log in' classes='btn-outline-success' />
            </div>
            <div className='col-xs-12'>
              <BtnLink to='/register' title='Click here to register' classes='btn-primary btn-lg btn-block' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
