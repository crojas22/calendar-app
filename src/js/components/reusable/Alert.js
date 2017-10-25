import React from 'react'

const Alert = ({title, classes}) => {
  const style = {
    top: 0,
    right: 0
  }
  return(
    <div className={classes} role="alert">
      {title}
      <button type="button" className="close p-0" style={style} data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert
