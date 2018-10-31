import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageWrapper from '../components/PageWrapper'
import GridWrapper from '../components/GridWrapper'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import LongStory from '../components/LongStory'
import config from '../config'

class Index extends Component {
  static propTypes = {
    // headerMenu: PropTypes.object.isRequired,
    allPhotos: PropTypes.array.isRequired,
  }

  static async getInitialProps() {
    const { apiUrl } = config
    const pageRes = await fetch(
      `${apiUrl}/wp-json/postlight/v1/page?slug=welcome`,
    )
    const page = await pageRes.json()

    const allPhotosRes = await fetch(`${apiUrl}/wp-json/wp/v2/photos?_embed`)
    const allPhotos = await allPhotosRes.json()
    return { page, allPhotos }
  }

  render() {
    const { allPhotos } = this.props

    return (
      <GridWrapper>
        {() => (
          <Fragment>
            <Nav />
            <Layout className="main-content">
              {/* <LongStory photos={allPhotos} /> */}
              {
                // TODO: video hero component
                // TODO: three-pane landing
                // TODO: projects slideshow/carousel
                // TODO: call to action/"who am i"
              }
            </Layout>
          </Fragment>
        )}
      </GridWrapper>
    )
  }
}

export default PageWrapper(Index)
