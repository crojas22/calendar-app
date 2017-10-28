import React from 'react'
import { Link } from 'react-router-dom'

export const BtnInput = ({title, classes, onClick, type}) => (
  <input type={type} value={title} className={'btn rounded-0 ' + classes} onClick={onClick}/>
)
BtnInput.defaultProps = {
  type: 'button'
}

export const BtnLink = ({title, classes, to}) => (
  <Link to={to} className={'btn rounded-0 ' + classes}>
    {title}
  </Link>
)

export const BtnSubmit = ({title, classes}) => (
  <button type='submit' className={'btn rounded-0 ' + classes}>
    {title}
  </button>
)
