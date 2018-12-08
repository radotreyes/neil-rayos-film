import { createContext } from 'react'
import config from '../config'

export const fetchMenuProps = async function fetchMenuProps() {
  const { apiUrl } = config
  const menusRes = await Promise.all(
    [`header-menu`, `nav-menu`, `footer-menu`].map(
      menu => new Promise(async (res) => {
        const fetchRes = await fetch(
          `${apiUrl}/wp-json/menus/v1/menus/${menu}`,
        )
        const fetchJson = await fetchRes.json()
        return res(fetchJson)
      }),
    ),
  )

  const [headerMenu, navMenu, footerMenu] = menusRes

  return {
    headerMenu,
    navMenu,
    footerMenu,
  }
}

export const defaultMenuContext = {
  headerMenu: {
    items: [],
  },
  navMenu: {
    items: [],
  },
  footerMenu: {
    items: [],
  },
}

export default createContext(defaultMenuContext)
