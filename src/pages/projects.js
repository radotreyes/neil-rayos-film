import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Masonry from 'react-masonry-component'
import uuidv4 from 'uuid/v4'

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
    console.log(this.props)
    const {
      data: {
        allContentfulProject: { edges },
      },
    } = this.props
    const projects = edges.map(
      ({
        node: {
          featuredImage: {
            sizes: { src: image },
          },
        },
      }) => image,
    )
    // const projectImages = projects.map(project => ({
    //   image:
    //     project._embedded[`wp:featuredmedia`][0].media_details.sizes
    //       .medium_large.source_url,
    //   slug: project.slug,
    //   link: project.link,
    // }))
    const mapProjectImages = () => projects.map(image => (
      <Link key={uuidv4()} to="/projects" className="masonry__project-anchor">
        <img className="masonry__project-image" src={image} alt="test" />
      </Link>
    ))

    return (
      <ScreenWrapper main screen="all-projects">
        {() => (
          <Fragment>
            {/* {({ isWindowLandscape }) => ( */}
            <section className="projects-page">
              <h1 className="lead">MY WORK</h1>
              <div className="projects-wrapper">
                {` `}
                {/* {!isWindowLandscape && mapProjectImages()} */}

                <Masonry className="projects-page__masonry">
                  {mapProjectImages()}
                </Masonry>
              </div>
            </section>
            {/* )} */}
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}

/* eslint-disable no-undef */
export const projectsQuery = graphql`
  query ProjectsQuery {
    allContentfulProject(sort: { fields: [releaseDate], order: DESC }) {
      edges {
        node {
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
