import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import ScreenWrapper from '../ScreenWrapper'
import Button from '../Button'
import Introduction from './Introduction'
import Projects from './Projects'
import About from './About'
// import Footer from './Footer'

export default class LongStory extends Component {
  static propTypes = {
    fields: PropTypes.shape({
      intro: PropTypes.object.isRequired,
      projects: PropTypes.object.isRequired,
      about: PropTypes.object.isRequired,
    }).isRequired,
    youtube: PropTypes.string.isRequired,
  }

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
    const {
      fields: { intro, projects, about },
      youtube,
    } = this.props
    return (
      <Fragment>
        <Introduction fields={intro} youtube={youtube} />
        {!isWindowLandscape && (
          <img
            src={intro.stills.bottomleft.url}
            style={{ width: `100%`, height: `56.25%` }}
          />
        )}
        <Projects fields={projects} />
        {!isWindowLandscape && (
          <img
            src={intro.stills.middle.url}
            style={{ width: `100%`, height: `56.25%` }}
          />
        )}
        <About fields={about} />
      </Fragment>
    )
  }
}
