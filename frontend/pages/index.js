import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageWrapper from '../components/PageWrapper'
import ScreenWrapper from '../components/ScreenWrapper'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LongStory from '../components/LongStory'
import config from '../config'

class Index extends Component {
  static propTypes = {
    // headerMenu: PropTypes.object.isRequired,
    acf: PropTypes.object.isRequired,
  }

  static async getInitialProps() {
    const { apiUrl, frontPage, media } = config
    const pageRes = await fetch(
      `${apiUrl}/wp-json/postlight/v1/page?slug=welcome`,
    )
    const page = await pageRes.json()

    const acfRes = await fetch(`${apiUrl}/${frontPage}`)
    const { acf } = await acfRes.json()
    return { page, acf }
  }

  render() {
    const {
      acf: {
        hero, intro, projects, about,
      },
    } = this.props

    return (
      <Fragment>
        {/* <Nav /> */}
        <Hero fields={hero} />
        <LongStory fields={{ intro, projects, about }} />
      </Fragment>
    )
  }
}

export default PageWrapper(Index)
