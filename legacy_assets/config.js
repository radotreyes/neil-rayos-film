const apiUrl = `http://localhost:8080`

export default {
  apiUrl,
  getRootEndpoint({ slug }) {
    return `${apiUrl}/${slug}`
  },
  getWpEndpoint({ slug }) {
    return `${apiUrl}/wp-json/wp/v2/pages?slug=projects${slug}`
  },
  getPostlightEndpoint({ slug }) {
    return `${apiUrl}/wp-json/postlight/v1/page?slug=${slug}`
  },
}
