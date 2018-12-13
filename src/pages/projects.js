import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Masonry from 'react-masonry-component'
import uuidv4 from 'uuid/v4'

import WindowContext from '../context/windowContext'
import ScreenWrapper from '../components/ScreenWrapper'

export default class Projects extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allContentfulProject: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const {
      data: {
        allContentfulProject: { edges },
      },
    } = this.props
    const projects = edges.map(
      ({
        node: {
          slug,
          category: { title: category },
          featuredImage: {
            sizes: { src: image },
          },
        },
      }) => ({
        slug,
        image,
        category,
      }),
    )
    console.log(projects)
    const mapProjectImages = () => projects.map(({ slug, image, category }) => (
      <Link
        key={uuidv4()}
        to={`/projects/${slug}`}
        className="masonry__project-anchor"
        data-category={category.toLowerCase()}
      >
        <img className="masonry__project-image" src={image} alt="test" />
      </Link>
    ))

    return (
      <WindowContext.Consumer>
        {({ isWindowLandscape }) => (
          <Fragment>
            <section className="projects-page">
              <h1 className="lead">MY WORK</h1>
              <div className="projects-wrapper">
                {` `}
                {!isWindowLandscape ? (
                  mapProjectImages()
                ) : (
                  <Masonry className="projects-page__masonry">
                    {mapProjectImages()}
                  </Masonry>
                )}
              </div>
            </section>
          </Fragment>
        )}
      </WindowContext.Consumer>
    )
  }
}

/* eslint-disable no-undef */
export const projectsQuery = graphql`
  query ProjectsQuery {
    allContentfulProject(sort: { fields: [releaseDate], order: DESC }) {
      edges {
        node {
          slug
          category {
            title
          }
          featuredImage {
            sizes(maxWidth: 800, maxHeight: 450) {
              src
            }
          }
        }
      }
    }
  }
`
