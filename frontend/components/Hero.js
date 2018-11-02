import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import ScreenWrapper from './ScreenWrapper'
import config from '../config'
import Button from './Button'
import Instagram from '../svgs/instagram.svg'
import YouTube from '../svgs/youtube.svg'
import Twitter from '../svgs/twitter.svg'
// import Footer from './Footer'

export default class Hero extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
  }

  render() {
    const {
      fields: { featured_image, featured_text },
    } = this.props
    return (
      <ScreenWrapper screen="hero">
        {() => (
          <Fragment>
            <div
              className="hero__grid"
              style={{
                backgroundImage: `url(${featured_image})`,
              }}
            >
              <div className="hero__header">
                <h1>{featured_text}</h1>
                <div className="header__svgs">
                  <span>FIND ME ON:</span>
                  <div className="svgs__svgs">
                    <YouTube />
                    <Instagram />
                    <Twitter />
                  </div>
                </div>
              </div>
              <div className="hero__buttons">
                <Button type="button" theme="ghost" value="PROJECTS" />
                <Button type="button" theme="primary" value="WORK WITH ME" />
                <Button type="button" theme="ghost" value="ABOUT" />
              </div>
            </div>
          </Fragment>
        )}
      </ScreenWrapper>
    )
  }
}