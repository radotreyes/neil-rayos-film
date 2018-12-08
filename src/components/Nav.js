import React, { Component, Fragment } from 'react'
import { throttle } from 'lodash'
import MenuContext from '../context/menuContext'
import getMenuProps from '../helpers/getMenuProps'

export default class Nav extends Component {
  state = {
    lastY: 0,
    shouldShowNav: true,
  }

  componentDidMount = () => {
    this.setState({
      lastY: window.scrollY,
    })
    window.addEventListener(`scroll`, throttle(this.handleScroll, 100))
  }

  componentWillUnmount = () => {
    window.removeEventListener(`scroll`, throttle(this.handleScroll, 100))
  }

  handleScroll = () => {
    const { lastY } = this.state
    if (window.scrollY - lastY < 0) {
      this.setState({ shouldShowNav: true })
    } else {
      this.setState({ shouldShowNav: false })
    }
    this.setState({
      lastY: window.scrollY,
    })
  }

  render() {
    const { shouldShowNav } = this.state
    return (
      <nav className={`nav ${shouldShowNav ? `` : `hidden`}`}>
        <MenuContext.Consumer>
          {({ headerMenu }) => (
            <Fragment>
              {getMenuProps({ ...headerMenu, linkClassName: `nav__link` })}
            </Fragment>
          )}
        </MenuContext.Consumer>
      </nav>
    )
  }
}
