import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import Introduction from './Introduction'
import Projects from './Projects'
import About from './About'
// import Footer from './Footer'

export default class LongStory extends Component {
  // static propTypes = {
  //   fields: PropTypes.shape({
  //     intro: PropTypes.object.isRequired,
  //     projects: PropTypes.object.isRequired,
  //     about: PropTypes.object.isRequired,
  //   }).isRequired,
  //   youtube: PropTypes.string.isRequired,
  // }

  state = {
    isWindowLandscape: true,
  }

  componentDidMount = () => {
    this.handleResize()
    window.addEventListener(`resize`, this.handleResize)
  }

  handleResize = () => {
    this.setState({
      isWindowLandscape: window.matchMedia(`(orientation: landscape)`).matches,
    })
  }

  render() {
    const { isWindowLandscape } = this.state
    // const {
    //   fields: { intro, projects, about },
    //   youtube,
    // } = this.props
    return (
      <Fragment>
        <Introduction fields youtube />
        {!isWindowLandscape && (
          <img
            src="#"
            style={{ width: `100%`, height: `56.25%` }}
            alt="bottom-left project still"
          />
        )}
        <Projects fields />
        {!isWindowLandscape && (
          <img
            src="#"
            style={{ width: `100%`, height: `56.25%` }}
            alt="middle project still"
          />
        )}
        <About fields />
      </Fragment>
    )
  }
}
