import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from '../components/Nav'
import Container from '../components/container'

import Footer from '../components/Footer'
import WindowContext from '../context/windowContext'
import '../styles/style.scss'

class Template extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  state = {
    isWindowLandscape: true,
  }

  componentDidMount = () => {
    window.addEventListener(`resize`, this.handleResize)
    this.handleResize()
  }

  componentWillUnmount = () => {
    window.removeEventListener(`resize`, this.handleResize)
  }

  handleResize = () => {
    this.setState({
      isWindowLandscape: window.matchMedia(`(orientation: landscape)`).matches,
    })
  }

  render() {
    const {
      location,
      children,
      data: {
        contentfulFooter: { links },
      },
    } = this.props
    let header

    let rootPath = `/`
    /* eslint-disable no-undef */
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = `${__PATH_PREFIX__}/`
    }
    const { isWindowLandscape } = this.state
    return (
      <WindowContext.Provider value={{ isWindowLandscape }}>
        <Container>
          <Nav />
          <main className="main-content">{children()}</main>
          <Footer links={links} />
        </Container>
      </WindowContext.Provider>
    )
  }
}

export default Template

/* eslint-disable-no-undef */
export const layoutQuery = graphql`
  query LayoutQuery {
    contentfulFooter(contentful_id: { eq: "3HGNMi2toIWw8YkoKcwqMG" }) {
      links {
        title
        url
      }
    }
  }
`
