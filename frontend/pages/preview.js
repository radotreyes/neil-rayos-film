import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import GridWrapper from '../components/GridWrapper'
import PageWrapper from '../components/PageWrapper'
import Nav from '../components/Nav'
import config from '../config'

class Preview extends Component {
  static propTypes = {
    headerMenu: PropTypes.object.isRequired,
    url: PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.state = {
      post: null,
    }
  }

  componentDidMount() {
    const { apiUrl } = config
    const {
      url: {
        query: { id, wpnonce },
      },
    } = this.props
    fetch(
      `${apiUrl}/wp-json/postlight/v1/post/preview?id=${id}&_wpnonce=${wpnonce}`,
      { credentials: `include` }, // required for cookie nonce auth
    )
      .then(res => res.json())
      .then((res) => {
        this.setState({
          post: res,
        })
      })
  }

  render() {
    const { post } = this.state
    const { headerMenu } = this.props
    if (post && post.code && post.code === `rest_cookie_invalid_nonce`) return <Error statusCode={404} />

    return (
      <GridWrapper>
        {() => (
          <Fragment>
            <Nav menu={headerMenu} />
            <Layout>
              <h1>{post ? post.title.rendered : ``}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: post ? post.content.rendered : ``,
                }}
              />
            </Layout>
          </Fragment>
        )}
      </GridWrapper>
    )
  }
}

export default PageWrapper(Preview)
