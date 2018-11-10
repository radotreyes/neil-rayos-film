import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import ScreenWrapper from '../ScreenWrapper'
import Button from '../Button'
// import Footer from './Footer'

export default class Projects extends Component {
  static propTypes = {
    fields: PropTypes.shape({
      header: PropTypes.string.isRequired,
      stills: PropTypes.object.isRequired,
    }).isRequired,
  }

  render() {
    const {
      fields: {
        stills: { first, second, third },
      },
    } = this.props
    return (
      <ScreenWrapper screen="long-story-2">
        {() => (
          <div className="long-story__projects">
            <div className="long-story__projects--viewbox">
              <div
                className="viewbox__screen"
                style={{
                  background: `url(${first.url})`,
                  backgroundSize: `cover`,
                  zIndex: 10,
                }}
              />
            </div>
            <div className="long-story__projects--menu">
              <h2>PROJECTS</h2>
              <ul>
                <li className="active">
                  <h3>Narratives</h3>
                  <p>
                    Cloud bread schlitz raclette, banh mi gastropub fanny pack
                    echo park.
                  </p>

                  <h5>
                    <a href="" className="text-link">
                      SEE MORE
                    </a>
                  </h5>
                </li>
                <li>
                  <h3>Events</h3>
                  <p>
                    Cloud bread schlitz raclette, banh mi gastropub fanny pack
                    echo park.
                  </p>
                  <h5>
                    <a href="" className="text-link">
                      SEE MORE
                    </a>
                  </h5>
                </li>
                <li>
                  <h3>Film Festivals</h3>
                  <p>
                    Cloud bread schlitz raclette, banh mi gastropub fanny pack
                    echo park.
                  </p>
                  <h5>
                    <a href="" className="text-link">
                      SEE MORE
                    </a>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        )}
      </ScreenWrapper>
    )
  }
}
