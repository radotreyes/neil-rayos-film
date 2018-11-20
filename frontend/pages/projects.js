import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Masonry from 'react-masonry-component'
import uuidv4 from 'uuid/v4'
import Layout from '../components/Layout'
import ScreenWrapper from '../components/ScreenWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'

class Projects extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
  }

  static async getInitialProps() {
    const { apiUrl, getPostlightEndpoint } = config
    const pageRes = await fetch(
      getPostlightEndpoint({ slug: `projects&_embed` }),
    )
    const page = await pageRes.json()

    const projectsRes = await fetch(`${apiUrl}/wp-json/wp/v2/projects?_embed`)
    const projects = await projectsRes.json()
    return { page, projects }
  }

  render() {
    const { page, projects } = this.props
    const projectImages = projects.map(project => ({
      image:
        project._embedded[`wp:featuredmedia`][0].media_details.sizes
          .medium_large.source_url,
      slug: project.slug,
      link: project.link,
    }))

    if (!page.title) return <Error statusCode={404} />

    return (
      <ScreenWrapper main screen="all-projects">
        {() => (
          <Fragment>
            <Layout>
              <section className="projects-page">
                <h1 className="lead">MY WORK</h1>
                <Masonry className="projects-page__masonry">
                  {projectImages.map(({ image, slug }) => (
                    <Link
                      key={uuidv4()}
                      href={`project/${slug}`}
                      as={`project/${slug}`}
                    >
                      <a className="masonry__project-anchor">
                        <img
                          className="masonry__project-image"
                          src={image}
                          alt={slug}
                        />
                      </a>
                    </Link>
                  ))}
                </Masonry>
              </section>
            </Layout>
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}

export default PageWrapper(Projects)
