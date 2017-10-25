import React from 'react'

const BtnSubmit = ({title, classes, type}) => {
  const style = {
    cursor : 'pointer'
  }
  return(
    <button type={type} className={classes} style={style}>
      {title}
    </button>
  )
}

export default BtnSubmit
