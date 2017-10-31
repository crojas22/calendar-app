import React, { Component } from 'react'
import Calendar from './calendar/Calendar'

class Homepage extends Component {

  componentDidMount() {
    this.props.verificationTest(this.props.history)
  }

  render() {
    return(
      <div>
        {
          !this.props.auth ? null : <Calendar {...this.props} />
        }
      </div>
    )
  }
}

export default Homepage
