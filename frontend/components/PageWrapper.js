import React, { Component } from 'react'
import MenuContext, { fetchMenuProps } from '../context/menuContext'

const PageWrapper = Comp => class extends Component {
  static async getInitialProps(args) {
    const menusRes = await fetchMenuProps()
    return {
      menus: { ...menusRes },
      ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
    }
  }

  render() {
    const { menus } = this.props

    return (
      <MenuContext.Provider value={menus}>
        <Comp {...this.props} />
      </MenuContext.Provider>
    )
  }
}

export default PageWrapper
