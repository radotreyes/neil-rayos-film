import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import MenuContext from '../context/menuContext'
import getMenuProps from '../helpers/getMenuProps'
import Hamburger from '../svgs/hamburger.svg'
// import dynamic from 'next/dynamic'

export default class Footer extends Component {
  static propTypes = {
    windowIsLandscape: PropTypes.bool.isRequired,
  }

  render() {
    const { windowIsLandscape } = this.props
    const footerModifierClass = windowIsLandscape ? `landscape` : `portrait`
    return (
      <footer className={`footer ${footerModifierClass}`}>
        <MenuContext.Consumer>
          {({ footerMenu }) => (
            <Fragment>
              {getMenuProps({ ...footerMenu, linkClassName: `footer__link` })}
              <div className="svg-wrapper"><Hamburger id="hamburger" /></div>
            </Fragment>
          )}
        </MenuContext.Consumer>
      </footer>
    )
  }
}
