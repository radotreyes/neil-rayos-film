import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import GridWrapper from '../components/GridWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'

class Booking extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  static async getInitialProps(ctx) {
    const { slug, apiRoute } = ctx.query
    const { apiUrl } = config
    const postRes = await fetch(
      `${apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`,
    )
    const post = await postRes.json()
    return { post }
  }

  render() {
    const { post } = this.props

    if (!post.title) return <Error statusCode={404} />

    return (
      <GridWrapper>
        {() => (
          <Fragment>
            <Layout>
              <h1>{post.title.rendered}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            </Layout>
          </Fragment>
        )}
      </GridWrapper>
    )
  }
}

export default PageWrapper(Booking)
