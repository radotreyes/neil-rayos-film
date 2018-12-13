/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import PropTypes from 'prop-types'
import Button, { ButtonLink } from './Button'
import Instagram from '../../static/svgs/instagram.svg'
import YouTube from '../../static/svgs/youtube.svg'
import Twitter from '../../static/svgs/twitter.svg'

const Hero = (props) => {
  const {
    heroProps: {
      heroDisplayText, heroMedia, instagram, twitter, youtube,
    },
  } = props

  const videoPattern = new RegExp(/^.+\.mp4$/)
  const [
    {
      file: { url: video },
    },
  ] = heroMedia.filter(media => videoPattern.test(media.file.fileName))

  const imagePattern = new RegExp(/^.+((jpe*g)|(png)|(webp))$/)
  const [
    {
      file: { url: image },
    },
  ] = heroMedia.filter(media => imagePattern.test(media.file.fileName))

  return (
    <div
      className="hero__grid"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundAttachment: `fill`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <video autoPlay muted className="hero__video" loop src={video}>
        social-butterfly.mp4
      </video>
      <div className="hero__header">
        <h1 className="jumbotron marquee">{heroDisplayText}</h1>
        <div className="header__svgs">
          <span>FIND ME ON:</span>
          <div className="svgs__svgs">
            <a href={youtube}>
              <YouTube />
            </a>
            <a href={instagram}>
              <Instagram />
            </a>
            <a href={twitter}>
              <Twitter />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__buttons">
        <ButtonLink
          href="/projects"
          type="button"
          theme="ghost"
          value="PROJECTS"
        />
        <Button type="button" theme="primary" value="WORK WITH ME" />
        <ButtonLink href="/about" type="button" theme="ghost" value="ABOUT" />
      </div>
    </div>
  )
}

Hero.propTypes = {
  heroProps: PropTypes.object.isRequired,
}

export default Hero
