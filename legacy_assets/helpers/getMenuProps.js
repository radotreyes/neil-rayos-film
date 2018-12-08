import React from 'react'
import Link from 'next/link'

export default ({ items, linkClassName }) => items.map((item) => {
  if (item.object === `custom`) {
    return (
      <Link href={item.url} key={item.ID}>
        <a className={linkClassName}>{item.title}</a>
      </Link>
    )
  }
  const getSlug = (url) => {
    const parts = url.split(`/`)
    return parts.length > 2 ? parts[parts.length - 2] : ``
  }
  const slug = getSlug(item.url)
  const actualPage = item.object === `category` ? `category` : `post`
  const routePrefixString = item.object === `page` ? `` : `/`
  const routeObjectString = item.object === `page` ? `` : item.object
  return (
    <Link
      as={`${routePrefixString}${routeObjectString}/${slug}`}
      href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
      key={item.ID}
    >
      <a className={linkClassName}>{item.title}</a>
    </Link>
  )
})
