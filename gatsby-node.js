// const Promise = require(`bluebird`)
const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const project = path.resolve(`./src/templates/project.js`)
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        const projects = result.data.allContentfulProject.edges
        projects.forEach((singleProject) => {
          createPage({
            path: `/projects/${singleProject.node.slug}/`,
            component: project,
            context: {
              slug: singleProject.node.slug,
            },
          })
        })
      }),
    )
  })
}
