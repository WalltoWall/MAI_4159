const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  if (result.data.allPrismicPage)
    result.data.allPrismicPage.edges.forEach(({ node }) => {
      if (node.uid.startsWith('_')) {
        console.log(
          `Skipping createPage for ${node.uid} (reason: uid starts with '_')`
        )
        return
      }

      createPage({
        path: node.uid === 'home' ? '/' : node.uid,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          id: node.id,
        },
      })
    })
}
