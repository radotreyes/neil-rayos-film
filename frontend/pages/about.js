import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import ScreenWrapper from '../components/ScreenWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'

class About extends Component {
  // static propTypes = {
  //   project: PropTypes.array.isRequired,
  // }

  static async getInitialProps(ctx) {
    // const { slug } = ctx.query
    // const { apiUrl } = config
    // const projectRes = await fetch(
    //   `${apiUrl}/wp-json/wp/v2/projects?_embed&slug=${slug}`,
    // )
    // const project = await projectRes.json()
    // return { project: project[0] }
  }

  render() {
    // const { project } = this.props
    // const { slug } = project

    // if (!project.title) return <Error statusCode={404} />

    return (
      <ScreenWrapper main spanInline screen="about">
        {() => (
          <Fragment>
            {/* <Nav /> */}
            <Layout>
              <h1 className="lead--center">About Page Placeholder</h1>
              <div className="project__iframe-wrapper">
                <iframe
                  className="project__video-embed"
                  title="Placeholder"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/kewXtkGmDtw"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="project__video-padding" />
              <div className="project__body">
                <ul className="project__nav">
                  <li className="active">Synopsis</li>
                  <li>Production</li>
                  <li>Director's Thoughts</li>
                </ul>
                <div className="project__description">
                  <h1 className="project__header lead">header</h1>
                  <p>
                    Lorem ipsum dolor amet wayfarers edison bulb gochujang,
                    lo-fi 90's blog +1 normcore cardigan umami slow-carb
                    asymmetrical. Try-hard microdosing tumblr tacos, yr kale
                    chips mumblecore bicycle rights shaman tumeric trust fund.
                    Kogi distillery meditation godard flexitarian hell of jean
                    shorts raw denim leggings butcher salvia yr. Put a bird on
                    it umami heirloom blue bottle forage biodiesel. Shabby chic
                    humblebrag gochujang, tofu chambray bicycle rights keffiyeh
                    flannel brunch raw denim you probably haven't heard of them
                    gastropub chillwave keytar.
                  </p>
                  <img
                    src="https://res.cloudinary.com/try-coding-its-fun/image/upload/v1540331264/10-14-Night.jpg"
                    alt="puppy"
                  />
                  <p>
                    Lorem ipsum dolor amet wayfarers edison bulb gochujang,
                    lo-fi 90's blog +1 normcore cardigan umami slow-carb
                    asymmetrical. Try-hard microdosing tumblr tacos, yr kale
                    chips mumblecore bicycle rights shaman tumeric trust fund.
                    Kogi distillery meditation godard flexitarian hell of jean
                    shorts raw denim leggings butcher salvia yr. Put a bird on
                    it umami heirloom blue bottle forage biodiesel. Shabby chic
                    humblebrag gochujang, tofu chambray bicycle rights keffiyeh
                    flannel brunch raw denim you probably haven't heard of them
                    gastropub chillwave keytar.
                  </p>
                  <p>
                    Lorem ipsum dolor amet wayfarers edison bulb gochujang,
                    lo-fi 90's blog +1 normcore cardigan umami slow-carb
                    asymmetrical. Try-hard microdosing tumblr tacos, yr kale
                    chips mumblecore bicycle rights shaman tumeric trust fund.
                    Kogi distillery meditation godard flexitarian hell of jean
                    shorts raw denim leggings butcher salvia yr. Put a bird on
                    it umami heirloom blue bottle forage biodiesel. Shabby chic
                    humblebrag gochujang, tofu chambray bicycle rights keffiyeh
                    flannel brunch raw denim you probably haven't heard of them
                    gastropub chillwave keytar.
                  </p>
                </div>
              </div>
            </Layout>
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}

export default PageWrapper(About)
