import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import config from '../config'
import getMenuProps from '../helpers/getMenuProps'
import stylesheet from '../src/styles/style.scss'

export default class Header extends Component {
  // static propTypes = {
  //   menus: PropTypes.object.isRequired,
  // }

  render() {
    // const {
    //   menus: { headerMenu },
    // } = this.props

    // const menuItems = getMenuProps(headerMenu)

    return (
      <div>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          {/* THE SITE TITLE IS HERE YOU DINGUS */}
          <title>NEIL RAYOS</title>
        </Head>
      </div>
    )
  }
}
