/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import PropTypes from 'prop-types'
// import Header from './Header'
import ScreenWrapper from './ScreenWrapper'
import Button, { ButtonLink } from './Button'
import Instagram from '../../static/svgs/instagram.svg'
import YouTube from '../../static/svgs/youtube.svg'
import Twitter from '../../static/svgs/twitter.svg'

// import Footer from './Footer'
const Hero = (props) => {
  const {
    data: { heroDisplayText, heroMedia },
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

  console.log(image)
  return (
    <div
      className="hero__grid"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundAttachment: `fill`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      {/* <video
      autoPlay
      className="hero__video"
      loop
      src="https://cl.ly/36073bf9ec2b/social-butterfly.mp4"
    >
      social-butterfly.mp4
    </video> */}
      <div className="hero__header">
        <h1 className="jumbotron marquee">{heroDisplayText}</h1>
        <div className="header__svgs">
          <span>FIND ME ON:</span>
          <div className="svgs__svgs">
            <a href="https://youtube.com">
              <YouTube />
            </a>
            <a href="https://youtube.com">
              <Instagram />
            </a>
            <a href="https://youtube.com">
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
  data: PropTypes.object.isRequired,
}

export default Hero
