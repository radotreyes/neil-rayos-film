/* eslint-disable react/button-has-type */

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ theme, type, value }) => (
  <button type={type} className={`button--${theme}`}>
    {value}
  </button>
)

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Button
