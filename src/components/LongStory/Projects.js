/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import uuidv4 from 'uuid/v4'

import ScreenWrapper from '../ScreenWrapper'
import normalizeString from '../../helpers/normalizeString'

export default class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  }

  constructor() {
    super()
    this.carousel = createRef()
    this.carouselMarker = createRef()
    this.carouselImage = createRef()
  }

  componentDidMount = () => {
    const { projects } = this.props
    const initialFeaturedImage = projects[0].featuredImage.sizes.src
    this.setMarkerPosition()
    window.addEventListener(`resize`, this.setMarkerPosition)
    this.carouselImage.current.style.backgroundSize = `cover`
    this.carouselImage.current.style.background = `url('${initialFeaturedImage}')`
    this.carouselImage.current.style.backgroundRepeat = `no-repeat`
  }

  componentwillunmount = () => {
    window.removeEventListener(`resize`, this.setMarkerPosition)
  }

  setMarkerPosition = () => {
    if (!this.carousel.current) return
    const activeItem = document.querySelector(`li.active`)
    const ul = this.carousel.current
    const carouselMarker = this.carouselMarker.current
    const { top: ulTop } = ul.getBoundingClientRect()
    const { top, height, width } = activeItem.getBoundingClientRect()

    carouselMarker.style.height = `${height}px`
    carouselMarker.style.width = `${width}px`
    carouselMarker.style.top = `${top - ulTop}px`
  }

  handleCarouselClick = ({ nativeEvent: { path } }) => {
    const { projects } = this.props
    const featuredImages = projects.map(
      project => project.featuredImage.sizes.src,
    )

    const ul = this.carousel.current
    const listItems = Array.from([...ul.children][0]).filter(
      listItem => listItem.localName === `li`,
    )
    listItems.forEach((listItem) => {
      const { classList } = listItem
      /* eslint-disable-next-line */
      classList.contains(`active`) && classList.remove(`active`)
    })
    const activeItem = path[1]
    activeItem.classList.add(`active`)
    this.setMarkerPosition()
    this.carouselImage.current.style.backgroundImage = `url(${
      featuredImages[activeItem.dataset.index]
    })`
    this.carouselImage.current.style.backgroundSize = `cover`
  }

  render() {
    const { projects } = this.props
    const featuredList = projects.map(({ category, slug }) => ({
      title: category.title,
      slug,
      description: category.description.internal.content,
    }))
    return (
      <ScreenWrapper screen="long-story-2">
        {() => (
          <div className="long-story__projects">
            <div className="long-story__projects--viewbox">
              <div className="viewbox__screen" ref={this.carouselImage} />
            </div>
            <div className="long-story__projects--menu">
              <h2 className="lead">PROJECTS</h2>
              <ul ref={this.carousel}>
                <div className="carousel-marker" ref={this.carouselMarker}>
                  .
                </div>
                {featuredList.map(({ description, slug, title }, i) => (
                  <li
                    key={uuidv4()}
                    className={!i ? `active` : ``}
                    data-index={i}
                  >
                    <h3
                      onClick={this.handleCarouselClick}
                      onKeyDown={this.handleCarouselClick}
                    >
                      {title}
                    </h3>
                    <p>{description}</p>
                    <h5>
                      <Link
                        className="text-link"
                        to={{
                          pathname: `/projects`,
                          search: `?category=${title.toLowerCase()}`,
                          state: {
                            searchInput: title.toLowerCase(),
                          },
                        }}
                      >
                        SEE MORE
                      </Link>
                    </h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </ScreenWrapper>
    )
  }
}
