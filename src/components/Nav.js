import React, { Component } from 'react'
import Link from 'gatsby-link'
import { throttle } from 'lodash'

export default class Nav extends Component {
  state = {
    lastY: 0,
    shouldShowNav: true,
  }

  componentDidMount = () => {
    this.setState({
      lastY: window.scrollY,
    })
    window.addEventListener(`scroll`, throttle(this.handleScroll, 100))
  }

  componentWillUnmount = () => {
    window.removeEventListener(`scroll`, throttle(this.handleScroll, 100))
  }

  handleScroll = () => {
    const { lastY } = this.state
    if (window.scrollY - lastY < 0) {
      this.setState({ shouldShowNav: true })
    } else {
      this.setState({ shouldShowNav: false })
    }
    this.setState({
      lastY: window.scrollY,
    })
  }

  render() {
    const { shouldShowNav } = this.state
    return (
      <nav className={`nav${shouldShowNav ? `` : ` hidden`}`}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </nav>
    )
  }
}
