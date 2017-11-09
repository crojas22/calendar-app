import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    return(
      this.state.hasError ? <h2>Something went wrong</h2>
      : this.props.children
    )
  }
}
