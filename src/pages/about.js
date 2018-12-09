import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
// import fetch from 'isomorphic-unfetch'
// import Error from 'next/error'

import Layout from '../components/Layout'
// import Nav from '../components/Nav'
import ScreenWrapper from '../components/ScreenWrapper'
// import PageWrapper from '../components/PageWrapper'
// import config from '../config'
import Button from '../components/Button'
import Instagram from '../svgs/instagram.svg'
import YouTube from '../svgs/youtube.svg'
import Twitter from '../svgs/twitter.svg'
import Location from '../svgs/location.svg'

export default class About extends Component {
  // static propTypes = {
  //   page: PropTypes.object.isRequired,
  //   acf: PropTypes.object.isRequired,
  // }

  // static async getInitialProps() {
  //   const { getPostlightEndpoint } = config
  //   const pageRes = await fetch(getPostlightEndpoint({ slug: `about` }))
  //   const page = await pageRes.json()
  //   return { page, acf: page.acf }
  // }

  render() {
    // const { page, acf } = this.props
    // const {
    //   content: { rendered: content },
    // } = page
    // const {
    //   name,
    //   title,
    //   location,
    //   button_text,
    //   resume,
    //   you,
    //   social_media: { twitter, youtube, instagram },
    // } = acf

    return (
      <Fragment>
        <ScreenWrapper spanInline screen="about">
          {() => (
            <div className="about__wrapper">
              <div className="about__body">
                <h1 className="about__header lead">about me</h1>
                <div className="about__profile">
                  <section
                    className="profile__profile-picture"
                    style={{
                      background: `black`,
                      backgroundSize: `cover`,
                    }}
                  >
                    1
                  </section>
                  <section className="profile__me">
                    <div className="me__wrapper">
                      <div className="me__me">name</div>
                      <div className="me__social-media">
                        <a href="https://youtube.com">
                          <YouTube />
                        </a>
                        <a href="https://instagram.com">
                          <Instagram />
                        </a>
                        <a href="https://twitter.com">
                          <Twitter />
                        </a>
                      </div>
                    </div>
                    <div className="me__title">title</div>
                    <div className="me__location">
                      <Location />
                      location
                    </div>
                    <Button
                      type="button"
                      theme="secondary"
                      value="button_text"
                    />
                  </section>
                </div>
                <div
                  className="about__desc"
                  dangerouslySetInnerHTML={{ __html: `content` }}
                />
              </div>
              <div className="about__cv">
                <h1 className="about__header lead">resume</h1>
                <div
                  className="cv__cv"
                  dangerouslySetInnerHTML={{ __html: `resume` }}
                />
              </div>
            </div>
          )}
        </ScreenWrapper>
      </Fragment>
    )
  }
}
