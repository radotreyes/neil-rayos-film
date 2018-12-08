/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

const Button = ({ theme, type, value }) => (
  <button type={type} className={`button--${theme}`}>
    {value}
  </button>
)

export const ButtonLink = ({
  href, as, theme, type, value,
}) => (
  <Link href={href} as={as}>
    <a>
      <Button type={type} theme={theme} value={value} />
    </a>
  </Link>
)

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

ButtonLink.propTypes = {
  as: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Button
