/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

const Button = ({ theme, type, value }) => (
  <button type={type} className={`button--${theme}`}>
    {value}
  </button>
)

export const ButtonLink = ({
  href, theme, type, value,
}) => (
  <Link to={href}>
    <Button type={type} theme={theme} value={value} />
  </Link>
)

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

ButtonLink.propTypes = {
  theme: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Button
