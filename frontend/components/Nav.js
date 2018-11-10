import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import MenuContext from '../context/menuContext'
import getMenuProps from '../helpers/getMenuProps'

export default class Nav extends Component {
  static propTypes = {
    breakpoints: PropTypes.string,
  }

  static defaultProps = {
    breakpoints: `none`,
  }

  constructor(props) {
    super(props)

    this.nav = React.createRef()
  }

  handleScroll = () => {}

  render() {
    return (
      <nav className="nav">
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
