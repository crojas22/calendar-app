import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { verificationTest } from '../actions/verification'
import Calendar from './calendar/Calendar'

class Homepage extends Component {

  componentDidMount() {
    this.props.verificationTest(this.props.history)
  }

  render() {
    const { userAuthorized } = this.props
    return(
      <div>
        {
          !userAuthorized ? null : <Calendar />
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { userAuthorized: state.userAuthorized }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ verificationTest }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
