const path = require('path')

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
      allPrismicNewsPost {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicTeamMember {
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
  if (result.data.allPrismicNewsPost) {
    let results = result.data.allPrismicNewsPost
    createPrismicPage(results, 'newsPost')
  }
  if (result.data.allPrismicTeamMember) {
    let results = result.data.allPrismicTeamMember
    createPrismicPage(results, 'teamMember')
  }
}
