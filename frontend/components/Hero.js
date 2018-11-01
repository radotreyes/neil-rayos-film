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
    background: PropTypes.array.isRequired,
  }

  render() {
    const { background } = this.props
    const heroBg = background[0].source_url
    return (
      <ScreenWrapper screen="hero">
        {() => (
          <Fragment>
            <div
              className="hero__grid"
              style={{
                backgroundImage: `url(${heroBg})`,
              }}
            >
              <div className="hero__header">
                <h1>I'm a film director and producer</h1>
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
