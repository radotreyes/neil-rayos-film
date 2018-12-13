/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component, Fragment, createRef } from 'react'
import PropTypes from 'prop-types'

import Markdown from 'react-markdown'
import WindowContext from '../context/windowContext'

export default class Project extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  state = {
    activeSlide: `synopsis`,
  }

  projectDescription = createRef()

  projectNav = createRef()

  navMarker = createRef()

  componentDidMount = () => {
    window.addEventListener(`resize`, this.setMarkerPosition)
    this.setMarkerPosition()
  }

  componentWillUnmount = () => {
    window.removeEventListener(`resize`, this.setMarkerPosition)
  }

  setMarkerPosition = () => {
    if (!this.projectNav.current) return
    const activeItem = document.querySelector(`li.active`)
    const ul = this.projectNav.current
    const navMarker = this.navMarker.current
    const { left: ulLeft } = ul.getBoundingClientRect()
    const { left, width } = activeItem.getBoundingClientRect()
    const markerWidthOffset = 5

    navMarker.style.left = `${left - ulLeft + width / 2 - markerWidthOffset}px`
  }

  handleMenuClick = (e) => {
    const ul = this.projectNav.current
    if (e.target === ul) return
    const { slide: activeSlide } = e.target.dataset
    const listItems = Array.from([...ul.children][0]).filter(
      listItem => listItem.localName === `li`,
    )
    listItems.forEach(({ classList }) => {
      /* eslint-disable-next-line */
      classList.contains(`active`) && classList.remove(`active`)
    })

    e.target.classList.add(`active`)
    this.setMarkerPosition()
    this.setState({
      activeSlide,
    })
  }

  render() {
    const {
      data: {
        contentfulProject: {
          title,
          featuredVideo: { url: videoUrl, type: videoType },
          synopsis: {
            internal: { synopsis },
          },
          production: {
            internal: { production },
          },
          directorsThoughts: {
            internal: { directorsThoughts },
          },
        },
      },
    } = this.props
    const { activeSlide } = this.state
    const descriptions = {
      synopsis,
      production,
      directorsThoughts,
    }

    const description = descriptions[activeSlide]

    let videoEmbed = videoUrl
    let videoId
    switch (videoType) {
      case `YouTube`:
        [, videoId] = videoUrl.split(`=`)
        videoEmbed = `https://www.youtube.com/embed/${videoId}?autoplay=0`
        break
      case `Vimeo`:
        [, videoId] = videoUrl.split(`vimeo.com/`)
        videoEmbed = `https://player.vimeo.com/video/${videoId}`
        break
      default:
        break
    }
    return (
      <WindowContext.Consumer>
        {({ isWindowLandscape }) => (
          <div className="single-project">
            <h1
              className={`lead${
                isWindowLandscape ? `--center` : ``
              } project__header`}
            >
              {title}
            </h1>
            <div className="project__iframe-wrapper">
              <iframe
                className="project__video-embed"
                title={title}
                width="960px"
                height="auto"
                src={videoEmbed}
                frameBorder="0"
                allowFullScreen
              />
            </div>
            {isWindowLandscape && <div className="project__video-padding" />}
            <div className="project__body">
              {isWindowLandscape && (
                <ul
                  className="project__nav"
                  ref={this.projectNav}
                  onClick={this.handleMenuClick}
                >
                  <div className="project__nav--marker" ref={this.navMarker} />
                  <li className="active" data-slide="synopsis">
                    Synopsis
                  </li>
                  <li data-slide="production">Production</li>
                  <li data-slide="directorsThoughts">
                    {`Director's`}
                    {` `}
                    Thoughts
                  </li>
                </ul>
              )}
              <div>
                {isWindowLandscape ? (
                  <div className="project__description">
                    <Markdown source={description} />
                  </div>
                ) : (
                  <Fragment>
                    <div>
                      <Markdown source={synopsis} />
                    </div>
                    <div>
                      <Markdown source={production} />
                    </div>
                    <div>
                      <Markdown source={directorsThoughts} />
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        )}
      </WindowContext.Consumer>
    )
  }
}

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query SingleProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      releaseDate(formatString: "MMMM Do, YYYY")
      featuredVideo {
        url
        type
      }
      synopsis {
        internal {
          synopsis: content
        }
      }
      production {
        internal {
          production: content
        }
      }
      directorsThoughts {
        internal {
          directorsThoughts: content
        }
      }
      category {
        title
      }
    }
  }
`
