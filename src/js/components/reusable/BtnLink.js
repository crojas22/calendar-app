import React from 'react'
import { Link } from 'react-router-dom'

const BtnLink = ({title, classes, to}) => {
  return(
    <Link to={to} className={classes}>
      {title}
    </Link>
  )
}

export default BtnLink
