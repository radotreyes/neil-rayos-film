/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
// import PropTypes from 'prop-types'
// import Header from './Header'
import ScreenWrapper from './ScreenWrapper'
import Button, { ButtonLink } from './Button'
import Instagram from '../svgs/instagram.svg'
import YouTube from '../svgs/youtube.svg'
import Twitter from '../svgs/twitter.svg'

// import Footer from './Footer'

export default () => (
  <div
    className="hero__grid"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/try-coding-its-fun/image/upload/v1540331264/10-14-Night.jpg')`,
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
      <h1 className="jumbotron marquee">featured_text</h1>
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

// export default class Hero extends Component {
//   // static propTypes = {
//   //   fields: PropTypes.object.isRequired,
//   //   social: PropTypes.object.isRequired,
//   // }

//   render() {
//     // const {
//     //   fields: { featured_image, featured_video, featured_text },
//     //   social: { youtube, instagram, twitter },
//     // } = this.props
//     // const heroBgStyle = featured_video
//     //   ? { backgroundImage: `url('${featured_image}')` }
//     //   : {}
//     return (
//       <ScreenWrapper screen="hero">
//         {() => (
//           <Fragment>
//             <div className="hero__grid">
//               <video
//                 autoPlay
//                 className="hero__video"
//                 loop
//                 src="https://www.youtube.com/watch?v=oHg5SJYRHA0"
//               >
//                 social-butterfly.mp4
//               </video>
//               <div className="hero__header">
//                 <h1 className="jumbotron marquee">featured_text</h1>
//                 <div className="header__svgs">
//                   <span>FIND ME ON:</span>
//                   <div className="svgs__svgs">
//                     <a href="https://youtube.com">
//                       <YouTube />
//                     </a>
//                     <a href="https://youtube.com">
//                       <Instagram />
//                     </a>
//                     <a href="https://youtube.com">
//                       <Twitter />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="hero__buttons">
//                 <ButtonLink
//                   href="/projects"
//                   type="button"
//                   theme="ghost"
//                   value="PROJECTS"
//                 />
//                 <Button type="button" theme="primary" value="WORK WITH ME" />
//                 <ButtonLink
//                   href="/about"
//                   type="button"
//                   theme="ghost"
//                   value="ABOUT"
//                 />
//               </div>
//             </div>
//           </Fragment>
//         )}
//       </ScreenWrapper>
//     )
//   }
// }
// //
