import React, { Component, Fragment } from 'react'
import Link from 'next/link'
import MenuContext from '../context/menuContext'
import getMenuProps from '../helpers/getMenuProps'
import Logo from './Logo'
import Footer from './Footer'

export default class Nav extends Component {
  state = {
    windowIsLandscape: true,
  }

  componentDidMount = () => {
    window.addEventListener(`resize`, this.handleResize)
  }

  handleResize = () => {
    this.setState(() => {
      const { innerHeight, innerWidth } = window
      return { windowIsLandscape: innerWidth > innerHeight }
    })
  }

  render() {
    const { windowIsLandscape } = this.state
    return (
      <nav className="nav">
        <MenuContext.Consumer>
          {({ navMenu }) => (
            <Fragment>
              <Link href="/">
                <a className="logo">
                  <Logo />
                </a>
              </Link>
              {getMenuProps({ ...navMenu, linkClassName: `nav__link` })}
              {windowIsLandscape && <Footer windowIsLandscape />}
            </Fragment>
          )}
        </MenuContext.Consumer>
      </nav>
    )
  }
}
