import React, { Component, Fragment } from 'react'
// import MenuContext from '../context/menuContext'
// import getMenuProps from '../helpers/getMenuProps'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        {/* <span className="footer-menu">
          <MenuContext.Consumer>
            {({ footerMenu }) => (
              <Fragment>
                {getMenuProps({ ...footerMenu, linkClassName: `footer__link` })}
              </Fragment>
            )}
          </MenuContext.Consumer>
        </span>

        <span className="made-by">Built by Reuben Reyes</span> */}
      </footer>
    )
  }
}
