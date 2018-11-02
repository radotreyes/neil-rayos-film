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
  }

  render() {
    const {
      fields: { intro, projects, about },
    } = this.props
    return (
      <Fragment>
        <Introduction fields={intro} />
        <Projects fields={projects} />
        <About fields={about} />
      </Fragment>
    )
  }
}
