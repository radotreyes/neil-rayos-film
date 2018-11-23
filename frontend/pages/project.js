/* eslint-disable react/no-danger */

import React, { Component, Fragment, createRef } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
import MenuContext from '../context/menuContext'
import Layout from '../components/Layout'
import ScreenWrapper from '../components/ScreenWrapper'
import PageWrapper from '../components/PageWrapper'
import config from '../config'

class Project extends Component {
  static propTypes = {
    project: PropTypes.array.isRequired,
    acf: PropTypes.object.isRequired,
  }

  static async getInitialProps(ctx) {
    const { slug } = ctx.query
    const { apiUrl } = config
    const projectRes = await fetch(
      `${apiUrl}/wp-json/wp/v2/projects?_embed&slug=${slug}`,
    )
    const project = await projectRes.json()

    return { project: project[0], acf: project[0].acf }
  }

  state = {
    activeSlide: `synopsis`,
  }

  projectDescription = createRef()

  projectNav = createRef()

  navMarker = createRef()

  componentDidMount = () => {
    // window.addEventListener(`resize`, this.setMarkerPosition)
    this.setMarkerPosition()
  }

  // componentWillUnmount = () => {
  //   window.removEventListener(`resize`, this.setMarkerPosition)
  // }

  setMarkerPosition = () => {
    if (!this.projectNav) return
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
    const listItems = [...ul.children]
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
      project,
      acf,
      acf: { video_url },
    } = this.props
    const { activeSlide } = this.state
    const videoId = video_url.split(`=`)[1]
    const description = { __html: acf[activeSlide] }
    const { slug } = project

    if (!project.title) return <Error statusCode={404} />

    return (
      <Fragment>
        <Layout>
          <ScreenWrapper main spanInline screen={`${slug}`}>
            {() => (
              <MenuContext.Consumer>
                {({ isWindowLandscape }) => (
                  <Fragment>
                    <h1
                      className={`lead${
                        isWindowLandscape ? `--center` : ``
                      } project__header`}
                    >
                      {project.title.rendered}
                    </h1>
                    <div className="project__iframe-wrapper">
                      <iframe
                        className="project__video-embed"
                        title={project.title.rendered}
                        width="960px"
                        height="auto"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                    {isWindowLandscape && (
                      <div className="project__video-padding" />
                    )}
                    <div className="project__body">
                      {isWindowLandscape && (
                        <ul
                          className="project__nav"
                          ref={this.projectNav}
                          onClick={this.handleMenuClick}
                        >
                          <div
                            className="project__nav--marker"
                            ref={this.navMarker}
                          />
                          <li className="active" data-slide="synopsis">
                            Synopsis
                          </li>
                          <li data-slide="production">Production</li>
                          <li data-slide="directors_thoughts">
                            {`Director's`}
                            {` `}
                            Thoughts
                          </li>
                        </ul>
                      )}
                      {isWindowLandscape && (
                        <div
                          className="project__description"
                          dangerouslySetInnerHTML={description}
                        />
                      )}
                      {!isWindowLandscape && (
                        <div>
                          <div
                            className="project__description"
                            dangerouslySetInnerHTML={{ __html: acf.synopsis }}
                          />
                          <div
                            className="project__description"
                            dangerouslySetInnerHTML={{ __html: acf.production }}
                          />
                          <div
                            className="project__description"
                            dangerouslySetInnerHTML={{
                              __html: acf.directors_thoughts,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </Fragment>
                )}
              </MenuContext.Consumer>
            )}
          </ScreenWrapper>
        </Layout>
      </Fragment>
    )
  }
}

export default PageWrapper(Project)
