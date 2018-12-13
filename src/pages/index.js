import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'

import Hero from '../components/Hero'
import LongStory from '../components/LongStory'

export default class RootIndex extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const {
      data: {
        contentfulFrontPage,
        contentfulFrontPage: {
          person: { instagram, youtube, twitter },
          introHeader,
          introBody,
          featuredStills,
          aboutLeft,
          aboutLeftBody,
          aboutRight,
          aboutRightBody,
        },
        contentfulFeaturedProjects: { featuredProjects },
      },
    } = this.props
    const intro = { introHeader, introBody }
    const about = {
      aboutLeft,
      aboutLeftBody,
      aboutRight,
      aboutRightBody,
    }
    return (
      <Fragment>
        <Helmet title="siteTitle" />
        <Hero
          heroProps={{
            ...contentfulFrontPage,
            instagram,
            twitter,
            youtube,
          }}
        />
        <LongStory
          fields={{
            intro,
            featuredStills,
            featuredProjects,
            about,
            youtube,
          }}
        />
      </Fragment>
    )
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    contentfulFrontPage(contentful_id: { eq: "5wFcwc6AOksIksMQoQWGgS" }) {
      heroDisplayText
      heroMedia {
        id
        file {
          url
          fileName
        }
      }
      person {
        name
        title
        youtube
        instagram
        twitter
      }
      introHeader
      introBody {
        internal {
          content
        }
      }
      featuredStills {
        sizes(maxHeight: 450) {
          src
        }
      }
      aboutLeft
      aboutLeftBody {
        internal {
          content
        }
      }
      aboutRight
      aboutRightBody {
        internal {
          content
        }
      }
    }
    contentfulFeaturedProjects(
      contentful_id: { eq: "3No3nd5yfYqieEkc8gaqSk" }
    ) {
      featuredProjects {
        slug
        featuredImage {
          sizes(maxWidth: 800, maxHeight: 480, resizingBehavior: SCALE) {
            src
            sizes
          }
        }
        category {
          title
          description {
            internal {
              content
            }
          }
        }
      }
    }
  }
`
