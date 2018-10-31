import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
// import Footer from './Footer'

const LongStory = ({ photos }) => (
  <div className="long-story">
    {photos.map(photo => (
      // photo.id
      // photo.title.rendered
      <img
        alt="debug"
        src={
          photo._embedded[`wp:featuredmedia`][0].media_details.sizes.full
            .source_url
        }
      />
    ))}
  </div>
)

LongStory.propTypes = {
  photos: PropTypes.array.isRequired,
}

export default LongStory
