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
      allPrismicProject {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const createPrismicPage = (pages, templateFileName) => {
    pages.edges.forEach(({ node }) => {
      if (node.uid.startsWith('_')) {
        console.log(
          `Skipping createPage for ${node.uid} (reason: uid starts with '_')`
        )
        return
      }
      createPage({
        path: node.uid === 'home' ? '/' : node.uid,
        component: path.resolve('./src/templates/' + templateFileName + '.js'),
        context: {
          id: node.id,
        },
      })
    })
  }
  if (result.data.allPrismicPage) {
    let results = result.data.allPrismicPage
    createPrismicPage(results, 'page')
  }
  if (result.data.allPrismicProject) {
    let results = result.data.allPrismicProject
    createPrismicPage(results, 'project')
  }
}
