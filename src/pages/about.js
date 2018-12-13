import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

import ScreenWrapper from '../components/ScreenWrapper'
import Button from '../components/Button'
import Instagram from '../../static/svgs/instagram.svg'
import YouTube from '../../static/svgs/youtube.svg'
import Twitter from '../../static/svgs/twitter.svg'
import Location from '../../static/svgs/location.svg'

export default class About extends Component {
  static propTypes = {
    data: PropTypes.shape({
      contentfulAboutPage: PropTypes.shape({
        person: PropTypes.shape({
          name: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
          twitter: PropTypes.string.isRequired,
          instagram: PropTypes.string.isRequired,
          youtube: PropTypes.string.isRequired,
          shortBio: PropTypes.shape({
            internal: PropTypes.shape({
              shortBio: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
        emailButtonText: PropTypes.string.isRequired,
        resume: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }

  render() {
    const {
      data: {
        contentfulAboutPage: {
          person: {
            name,
            title,
            email,
            location,
            instagram,
            twitter,
            youtube,
            shortBio: {
              internal: { shortBio },
            },
            profilePic: {
              sizes: { src: profilePic },
            },
            resume: {
              internal: { resume },
            },
          },
          emailButtonText,
        },
      },
    } = this.props
    return (
      <Fragment>
        <div id="about" className="about__wrapper">
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
                  {location}
                </div>
                <Button
                  type="button"
                  theme="secondary"
                  value={emailButtonText}
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
            <div className="cv__cv">
              <Markdown source={resume} />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

/* eslint-disable no-undef */
export const aboutQuery = graphql`
  query AboutQuery {
    contentfulAboutPage(contentful_id: { eq: "6LieSV3UacEkag0u8meGyW" }) {
      person {
        name
        title
        location
        email
        twitter
        instagram
        youtube
        shortBio {
          internal {
            shortBio: content
          }
        }
        resume {
          internal {
            resume: content
          }
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
      emailButtonText
    }
  }
`
