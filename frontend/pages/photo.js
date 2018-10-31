import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import GridWrapper from '../components/GridWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'

class Photo extends Component {
  static propTypes = {
    photo: PropTypes.array.isRequired,
  }

  static async getInitialProps(ctx) {
    const { slug, apiRoute } = ctx.query
    const { apiUrl } = config
    const photoRes = await fetch(
      `${apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`,
    )
    const photo = await photoRes.json()

    console.log(`${apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`)
    return { photo: photo[0] }
  }

  render() {
    const { photo } = this.props
    console.log(`PHOTO:`, photo)

    if (!photo.title) return <Error statusCode={404} />

    return (
      <GridWrapper>
        {() => (
          <Fragment>
            <Nav />
            <Layout>
              <h1>{photo.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: photo.content.rendered,
                }}
              />
            </Layout>
          </Fragment>
        )}
      </GridWrapper>
    )
  }
}

export default PageWrapper(Photo)
