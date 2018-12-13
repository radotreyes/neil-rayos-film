import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Masonry from 'react-masonry-component'
import uuidv4 from 'uuid/v4'

import WindowContext from '../context/windowContext'
import normalizeString from '../helpers/normalizeString'

export default class Projects extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allContentfulProject: PropTypes.shape({
        edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
      }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    const { location } = this.props
    this.state = location.state || { searchInput: `` }
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value,
    })
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
          title,
          slug,
          category: { title: category },
          featuredImage: {
            sizes: { src: image },
          },
        },
      }) => ({
        category,
        image,
        slug,
        title,
      }),
    )

    const { searchInput } = this.state
    const normalSearch = normalizeString(searchInput)
    const mapProjectImages = () => projects
      .filter(
        ({ category, slug, title }) => normalizeString(slug).includes(normalSearch)
            || normalizeString(category).includes(normalSearch)
            || normalizeString(title).includes(normalSearch),
      )
      .map(({ slug, image }) => (
        <Link
          key={uuidv4()}
          to={`/projects/${slug}`}
          className="masonry__project-anchor"
        >
          <img className="masonry__project-image" src={image} alt="test" />
        </Link>
      ))

    return (
      <WindowContext.Consumer>
        {({ isWindowLandscape }) => (
          <Fragment>
            <section className="projects-page">
              <div className="projects__header">
                <h1 className="lead">MY WORK</h1>
                <input
                  type="text"
                  placeholder="Search projects"
                  name="projects__search"
                  value={searchInput}
                  onChange={this.handleChange}
                  className="projects__search"
                />
              </div>
              <div className="projects-wrapper">
                {` `}
                {!isWindowLandscape ? (
                  mapProjectImages()
                ) : (
                  <Masonry
                    className="projects-page__masonry"
                    options={{
                      transitionDuration: 0,
                    }}
                  >
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
          title
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
