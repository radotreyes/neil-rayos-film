import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import config from '../config'

export default class Archive extends Component {
  static propTypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
  }

  state = { data: [] }

  componentWillMount = async () => {
    const { query } = this.props
    const { apiUrl, allData } = config
    const response = await fetch(`${apiUrl}/${allData(query)}`)
    const data = await response.json()
    this.setState({
      data,
    })
  }

  render() {
    const { data } = this.state
    const { slug, title } = this.props

    return (
      <Fragment>
        <h3>{title}</h3>
        <ul>
          {data.map(datum => (
            <li key={datum.id}>
              <Link
                as={`/${slug}/${datum.slug}`}
                href={`/${slug}?slug=${datum.slug}&apiRoute=${slug}`}
              >
                <a>{datum.title.rendered}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}
