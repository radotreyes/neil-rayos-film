import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import GridWrapper from '../components/GridWrapper'
import PageWrapper from '../components/PageWrapper'
import Nav from '../components/Nav'
import config from '../config'

class Category extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    photos: PropTypes.array.isRequired,
  }

  static async getInitialProps(context) {
    const { slug } = context.query
    const categoriesRes = await fetch(
      `${config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`,
    )
    const categories = await categoriesRes.json()
    if (categories.length > 0) {
      const postsRes = await fetch(
        `${config.apiUrl}/wp-json/wp/v2/photos?_embed&categories=${
          categories[0].id
        }`,
      )
      const photos = await postsRes.json()
      return { categories, photos }
    }
    return { categories }
  }

  render() {
    const { categories, photos } = this.props
    if (categories.length === 0) return <Error statusCode={404} />

    const allPhotos = photos.map((photo, index) => (
      <ul key={index}>
        <li>
          <Fragment>
            <Link
              as={`/photo/${photo.slug}`}
              href={`/photo?slug=${photo.slug}&apiRoute=photos`}
            >
              <a>{photo.title.rendered}</a>
            </Link>

            <ul>
              <li>
                id:
                {photo.id}
              </li>
              <li>
                title:
                {photo.title.rendered}
              </li>
            </ul>
            <img
              src={
                photo._embedded[`wp:featuredmedia`][0].media_details.sizes.full
                  .source_url
              }
            />
          </Fragment>
        </li>
      </ul>
    ))
    return (
      <GridWrapper>
        {() => (
          <Fragment>
            <Nav />
            <Layout>
              <h1>
                {categories[0].name}
                {` `}
                Posts
              </h1>
              {allPhotos}
            </Layout>
          </Fragment>
        )}
      </GridWrapper>
    )
  }
}

export default PageWrapper(Category)
