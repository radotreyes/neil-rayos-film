import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import uuidv4 from 'uuid/v4'

import ScreenWrapper from '../ScreenWrapper'
// import Footer from './Footer'

export default class Projects extends Component {
  static propTypes = {
    fields: PropTypes.shape({
      categories: PropTypes.array.isRequired,
    }).isRequired,
  }

  carousel = createRef()

  carouselMarker = createRef()

  carouselImage = createRef()

  componentDidMount = () => {
    this.setMarkerPosition()
    window.addEventListener(`resize`, this.setMarkerPosition)
    this.carouselImage.current.style.backgroundSize = `cover`
  }

  componentwillunmount = () => {
    window.removeEventListener(`resize`, this.setMarkerPosition)
  }

  setMarkerPosition = () => {
    if (!this.carousel) return
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
    const {
      fields: { categories },
    } = this.props

    const ul = this.carousel.current
    const listItems = [...ul.children]
    listItems.forEach(({ classList }) => {
      /* eslint-disable-next-line */
      classList.contains(`active`) && classList.remove(`active`)
    })
    const activeItem = path[1]
    activeItem.classList.add(`active`)
    this.setMarkerPosition()
    this.carouselImage.current.style.backgroundImage = `url(${
      categories[activeItem.dataset.index].featured_image
    })`
    this.carouselImage.current.style.backgroundSize = `cover`
  }

  render() {
    const {
      fields: { categories },
    } = this.props
    return (
      <ScreenWrapper screen="long-story-2">
        {() => (
          <div className="long-story__projects">
            <div className="long-story__projects--viewbox">
              <div
                className="viewbox__screen"
                style={{
                  background: `url(${categories[0].featured_image})`,
                }}
                ref={this.carouselImage}
              />
            </div>
            <div className="long-story__projects--menu">
              <h2 className="lead">PROJECTS</h2>
              <ul ref={this.carousel}>
                <div className="carousel-marker" ref={this.carouselMarker}>
                  .
                </div>
                {categories.map(({ name, description }, i) => (
                  <li
                    key={uuidv4()}
                    className={!i ? `active` : ``}
                    data-index={i}
                  >
                    <h3 onClick={this.handleCarouselClick}>{name}</h3>
                    <p>{description}</p>
                    <h5>
                      <a href="" className="text-link">
                        SEE MORE
                      </a>
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
