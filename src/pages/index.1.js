import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import PageWrapper from '../components/PageWrapper'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import LongStory from '../components/LongStory'
import config from '../config'

class Index extends Component {
  static propTypes = {
    // headerMenu: PropTypes.object.isRequired,
    acf: PropTypes.object.isRequired,
    social: PropTypes.object.isRequired,
  }

  static async getInitialProps() {
    const { getPostlightEndpoint } = config
    const pageRes = await fetch(getPostlightEndpoint({ slug: `front-page` }))
    const page = await pageRes.json()

    const socialRes = await fetch(getPostlightEndpoint({ slug: `about` }))
    const social = await socialRes.json()
    return { acf: page.acf, social: social.acf.social_media }
  }

  render() {
    const {
      acf: {
        hero, intro, projects, about,
      },
      social,
    } = this.props

    return (
      <Layout>
        <Hero fields={hero} social={social} />
        <LongStory
          fields={{
            intro,
            projects,
            about,
          }}
          youtube={social.youtube}
        />
      </Layout>
    )
  }
}

export default PageWrapper(Index)
