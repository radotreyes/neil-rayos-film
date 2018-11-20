import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import uuidv4 from 'uuid/v4'

import Layout from '../components/Layout'
import GridWrapper from '../components/GridWrapper'
import PageWrapper from '../components/PageWrapper'
import Nav from '../components/Nav'
import config from '../config'

class Category extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
  }

  static async getInitialProps(context) {
    const { slug } = context.query
    const categoriesRes = await fetch(
      `${config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`,
    )
    const categories = await categoriesRes.json()
    if (categories.length > 0) {
      const postsRes = await fetch(
        `${config.apiUrl}/wp-json/wp/v2/projects?_embed&categories=${
          categories[0].id
        }`,
      )
      const projects = await postsRes.json()
      return { categories, projects }
    }
    return { categories }
  }

  render() {
    const { categories, projects } = this.props
    if (categories.length === 0) return <Error statusCode={404} />

    const allprojects = projects.map(project => (
      <ul key={uuidv4()}>
        <li>
          <Fragment>
            <Link
              as={`/project/${project.slug}`}
              href={`/project?slug=${project.slug}&apiRoute=projects`}
            >
              <a>{project.title.rendered}</a>
            </Link>

            <ul>
              <li>
                id:
                {project.id}
              </li>
              <li>
                title:
                {project.title.rendered}
              </li>
            </ul>
            <img
              src={
                project._embedded[`wp:featuredmedia`][0].media_details.sizes
                  .full.source_url
              }
              alt={project.title.rendered}
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
              {allprojects}
            </Layout>
          </Fragment>
        )}
      </GridWrapper>
    )
  }
}

export default PageWrapper(Category)
