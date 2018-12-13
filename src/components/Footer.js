import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import MenuContext from '../context/menuContext'
// import getMenuProps from '../helpers/getMenuProps'

export default class Footer extends Component {
  static propTypes = {
    links: PropTypes.array,
  }

  static defaultProps = {
    links: [],
  }

  render() {
    const { links } = this.props
    const footerLinks = links.map(({ title, url }) => (
      <a className="footer__link" href={url}>
        {title}
      </a>
    ))
    return (
      <footer className="footer">
        <span className="footer-menu">{footerLinks}</span>
        <span className="made-by">Built by Reuben Reyes</span>
      </footer>
    )
  }
}
