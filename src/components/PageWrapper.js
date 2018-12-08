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

    state = {
      isWindowLandscape: true,
    }

    componentDidMount = () => {
      this.handleResize()
      window.addEventListener(`resize`, this.handleResize)
    }

    handleResize = () => {
      this.setState({
        isWindowLandscape: window.matchMedia(`(orientation: landscape)`)
          .matches,
      })
    }

    render() {
      const { menus } = this.props
      const { isWindowLandscape } = this.state
      return (
        <MenuContext.Provider value={{ ...menus, isWindowLandscape }}>
          <Comp {...this.props} />
        </MenuContext.Provider>
      )
    }
}

export default PageWrapper
