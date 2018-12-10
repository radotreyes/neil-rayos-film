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
    // console.log(this.props)
    // const {
    //   data: {
    //     site: {
    //       siteMetadata: { title: siteTitle },
    //     },
    //     allContentfulBlogPost: {
    //       edges: { posts },
    //     },
    //     allContentfulPerson: {
    //       edges: {
    //         author: [author],
    //       },
    //     },
    //   },
    // } = this.props
    // const siteTitle = get(this, `props.data.site.siteMetadata.title`)
    // const posts = get(this, `props.data.allContentfulBlogPost.edges`)
    // const [author] = get(this, `props.data.allContentfulPerson.edges`)
    const {
      data: { contentfulFrontPage },
    } = this.props
    return (
      <Fragment>
        <Helmet title="siteTitle" />
        {/* <Hero data={author.node} /> */}
        <Hero data={{ ...contentfulFrontPage }} />
        <LongStory />
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {/* {posts.map(({ node }) => (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            ))} */}
          </ul>
        </div>
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
    }
    # allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
    #   edges {
    #     node {
    #       name
    #       shortBio {
    #         shortBio
    #       }
    #       title
    #       heroImage: image {
    #         sizes(
    #           maxWidth: 1180
    #           maxHeight: 480
    #           resizingBehavior: PAD
    #           background: "rgb:000000"
    #         ) {
    #           ...GatsbyContentfulSizes_withWebp
    #         }
    #       }
    #     }
    #   }
    # }
  }
`
