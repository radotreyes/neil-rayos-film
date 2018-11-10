export default {
  apiUrl: `http://localhost:8080`,
  allData(query) {
    return `wp-json/wp/v2/${query}`
  },
  singlePost(slug) {
    return `wp-json/postlight/v1/post?slug=${slug}`
  },
  singleMediaPost(slug) {
    return `wp-json/wp/photo?_embed`
  },
  frontPage: `/wp-json/postlight/v1/page?slug=front-page`,
  projects: `/wp-json/postlight/v1/page?slug=projects`,
  about: `/wp-json/postlight/v1/page?slug=about`,
  media: `/wp-json/wp/v2/media`,
}
