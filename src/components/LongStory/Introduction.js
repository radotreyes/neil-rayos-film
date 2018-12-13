import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScreenWrapper from '../ScreenWrapper'
import YouTube from '../../../static/svgs/youtube.svg'
// import Footer from './Footer'

export default class LongStory extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    stills: PropTypes.array.isRequired,
    youtube: PropTypes.string.isRequired,
  }

  render() {
    const {
      header, body, youtube, stills,
    } = this.props
    const [
      {
        sizes: { src: topRight },
      },
      {
        sizes: { src: middle },
      },
      {
        sizes: { src: bottomLeft },
      },
    ] = stills
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
                  background: `url('${topRight}')`,
                  backgroundSize: `cover`,
                }}
              />
              <div
                className="introduction__still--2"
                style={{
                  background: `url('${middle}')`,
                  backgroundSize: `cover`,
                }}
              />
              <div
                className="introduction__still--3"
                style={{
                  background: `url('${bottomLeft}')`,
                  backgroundSize: `cover`,
                }}
              />
            </div>
          </div>
        )}
      </ScreenWrapper>
    )
  }
}
