import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Introduction from './Introduction'
import Projects from './Projects'
import About from './About'
// import Footer from './Footer'

export default class LongStory extends Component {
  static propTypes = {
    fields: PropTypes.shape({
      intro: PropTypes.object.isRequired,
      featuredStills: PropTypes.array.isRequired,
      featuredProjects: PropTypes.array.isRequired,
      about: PropTypes.object.isRequired,
    }).isRequired,
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
      fields: {
        intro: {
          introHeader,
          introBody: {
            internal: { content: introBody },
          },
        },
        featuredProjects,
        featuredStills,
        about: {
          aboutLeft,
          aboutLeftBody: {
            internal: { content: aboutLeftBody },
          },
          aboutRight,
          aboutRightBody: {
            internal: { content: aboutRightBody },
          },
        },
        youtube,
      },
    } = this.props
    const [
      {
        sizes: { src: topRight },
      },
      {
        sizes: { src: middle },
      },
    ] = featuredStills
    return (
      <Fragment>
        <Introduction
          header={introHeader}
          body={introBody}
          stills={featuredStills}
          youtube={youtube}
        />
        {!isWindowLandscape && (
          <img
            src={topRight}
            style={{ width: `100%`, height: `56.25%` }}
            alt="bottom-left project still"
          />
        )}
        <Projects projects={featuredProjects} />
        {!isWindowLandscape && (
          <img
            src={middle}
            style={{ width: `100%`, height: `56.25%` }}
            alt="middle project still"
          />
        )}
        <About
          left={{ header: aboutLeft, body: aboutLeftBody }}
          right={{ header: aboutRight, body: aboutRightBody }}
        />
      </Fragment>
    )
  }
}
