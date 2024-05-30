const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query GetType {
      allContentfulLoveeatbreads {
        nodes {
          type
        }
      }
    }
  `)

  result.data.allContentfulLoveeatbreads.nodes.forEach((item) => {
    item.type.forEach((tag) => {
      createPage({
        path: `/${tag}`,
        component: path.resolve(`src/template/type-template.js`),
        context: {
          type: tag,
        },
      })
    })
  })
}
