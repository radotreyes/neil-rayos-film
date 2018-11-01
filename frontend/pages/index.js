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
    media: PropTypes.array.isRequired,
  }

  static async getInitialProps() {
    const { apiUrl, media } = config
    const pageRes = await fetch(
      `${apiUrl}/wp-json/postlight/v1/page?slug=welcome`,
    )
    const page = await pageRes.json()

    const mediaRes = await fetch(`${apiUrl}/${media}`)
    const allMedia = await mediaRes.json()
    return { page, media: allMedia }
  }

  render() {
    const { media } = this.props

    return (
      <Fragment>
        {/* <Nav /> */}
        <Hero background={media} />
        <LongStory order="1" />
        <LongStory order="2" />
        <LongStory order="3" />
      </Fragment>
    )
  }
}

export default PageWrapper(Index)
