import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import ScreenWrapper from '../components/GridWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'

class Project extends Component {
  static propTypes = {
    project: PropTypes.array.isRequired,
  }

  static async getInitialProps(ctx) {
    const { slug } = ctx.query
    const { apiUrl } = config
    const projectRes = await fetch(
      `${apiUrl}/wp-json/wp/v2/projects?_embed&slug=${slug}`,
    )
    const project = await projectRes.json()

    return { project: project[0] }
  }

  render() {
    const { project } = this.props
    const { slug } = project

    if (!project.title) return <Error statusCode={404} />

    return (
      <ScreenWrapper screen={`${slug}`}>
        {() => (
          <Fragment>
            {/* <Nav /> */}
            <Layout>
              <h1>{project.title.rendered}</h1>
            </Layout>
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}

export default PageWrapper(Project)
