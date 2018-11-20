/* eslint-disable react/no-danger */

import React, { Component, Fragment, createRef } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-unfetch'
import Error from 'next/error'
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
    this.setMarkerPosition()
  }

  setMarkerPosition = () => {
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
      <ScreenWrapper main spanInline screen={`${slug}`}>
        {() => (
          <Fragment>
            <Layout>
              <h1 className="lead--center">{project.title.rendered}</h1>
              <div className="project__iframe-wrapper">
                <iframe
                  className="project__video-embed"
                  title={project.title.rendered}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="project__video-padding" />
              <div className="project__body">
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
                  <li data-slide="directors_thoughts">
                    {`Director's`}
                    {` `}
                    Thoughts
                  </li>
                </ul>
                <div
                  className="project__description"
                  dangerouslySetInnerHTML={description}
                />
              </div>
            </Layout>
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}

export default PageWrapper(Project)
