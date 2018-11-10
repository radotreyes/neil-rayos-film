import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import ScreenWrapper from '../ScreenWrapper'
import Button from '../Button'
import YouTube from '../../svgs/youtube.svg'
// import Footer from './Footer'

export default class LongStory extends Component {
  static propTypes = {
    fields: PropTypes.shape({
      header: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      stills: PropTypes.shape({
        topright: PropTypes.string.isRequired,
        middle: PropTypes.string.isRequired,
        bottomleft: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    youtube: PropTypes.string.isRequired,
  }

  render() {
    const {
      fields: {
        header,
        body,
        stills: { topright, middle, bottomleft },
      },
      youtube,
    } = this.props
    return (
      <ScreenWrapper screen="long-story-1">
        {() => (
          <div className="long-story__introduction">
            <div className="long-story__introduction--main">
              <h2 className="introduction__header">{header}</h2>
              <p className="introduction__body subtext">{body}</p>
              <div className="introduction__action">
                <YouTube />
                <a href={youtube} className="text-link">
                  VIEW SHOWREEL
                </a>
              </div>
            </div>
            <div className="long-story__introduction--stills">
              <div
                className="introduction__still--1"
                style={{
                  background: `url(${topright.url})`,
                  backgroundSize: `cover`,
                }}
              >
                1
              </div>
              <div
                className="introduction__still--2"
                style={{
                  background: `url(${middle.url})`,
                  backgroundSize: `cover`,
                }}
              >
                2
              </div>
              <div
                className="introduction__still--3"
                style={{
                  background: `url(${bottomleft.url})`,
                  backgroundSize: `cover`,
                }}
              >
                3
              </div>
            </div>
          </div>
        )}
      </ScreenWrapper>
    )
  }
}
