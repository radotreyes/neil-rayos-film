import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'

import Layout from '../components/Layout'
import Nav from '../components/Nav'
import ScreenWrapper from '../components/ScreenWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'
import Button from '../components/Button'
import Instagram from '../svgs/instagram.svg'
import YouTube from '../svgs/youtube.svg'
import Twitter from '../svgs/twitter.svg'
import Location from '../svgs/location.svg'

class About extends Component {
  static propTypes = {
    page: PropTypes.object.isRequired,
    acf: PropTypes.object.isRequired,
  }

  static async getInitialProps() {
    const { apiUrl, about } = config
    const pageRes = await fetch(`${apiUrl}/${about}`)
    const page = await pageRes.json()
    return { page, acf: page.acf }
  }

  render() {
    const { page, acf } = this.props
    const {
      content: { rendered: content },
    } = page
    const {
      name,
      title,
      location,
      button_text,
      resume,
      you,
      social_media: { twitter, youtube, instagram },
    } = acf

    if (!page.title) return <Error statusCode={404} />

    return (
      <ScreenWrapper main spanInline screen="about">
        {() => (
          <Fragment>
            {/* <Nav /> */}
            <Layout>
              <div className="about__wrapper">
                <div className="about__body">
                  <h1 className="about__header lead">about me</h1>
                  <div className="about__profile">
                    <section
                      className="profile__profile-picture"
                      style={{
                        background: `url(${you.url})`,
                        backgroundSize: `cover`,
                      }}
                    >
                      1
                    </section>
                    <section className="profile__me">
                      <div className="me__wrapper">
                        <div className="me__me">{name}</div>
                        <div className="me__social-media">
                          <a href={youtube}>
                            <YouTube />
                          </a>
                          <a href={instagram}>
                            <Instagram />
                          </a>
                          <a href={twitter}>
                            <Twitter />
                          </a>
                        </div>
                      </div>
                      <div className="me__title">{title}</div>
                      <div className="me__location">
                        <Location />
                        {location}
                      </div>
                      <Button
                        type="button"
                        theme="secondary"
                        value={button_text}
                      />
                    </section>
                  </div>
                  <div
                    className="about__desc"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
                <div className="about__cv">
                  <h1 className="about__header lead">resume</h1>
                  <div
                    className="cv__cv"
                    dangerouslySetInnerHTML={{ __html: resume }}
                  />
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