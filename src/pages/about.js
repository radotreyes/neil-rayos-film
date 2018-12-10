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
import Instagram from '../../static/svgs/instagram.svg'
import YouTube from '../../static/svgs/youtube.svg'
import Twitter from '../../static/svgs/twitter.svg'
import Location from '../../static/svgs/location.svg'

export default class About extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string,
      shortBio: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      instagram: PropTypes.string.isRequired,
      twitter: PropTypes.string.isRequired,
      youtube: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    }).isRequired,
  }

  render() {
    const {
      data: {
        contentfulPerson: {
          name,
          title,
          email,
          instagram,
          twitter,
          youtube,
          shortBio: { shortBio },
          profilePic: {
            sizes: { src: profilePic },
          },
        },
      },
    } = this.props
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
                      background: `url(${profilePic})`,
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
                  dangerouslySetInnerHTML={{ __html: shortBio }}
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

/* eslint-disable no-undef */
export const aboutQuery = graphql`
  query AboutQuery {
    contentfulPerson(id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" }) {
      name
      title
      email
      instagram
      twitter
      youtube
      shortBio {
        shortBio
      }
      profilePic: image {
        sizes(
          maxWidth: 1180
          maxHeight: 480
          resizingBehavior: PAD
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
    }
  }
`
