const path = require('path')
const dotenv = require('dotenv')
const truncate = require('truncate')
const { get } = require('lodash')
const {
  castArray,
  cond,
  flattenDeep,
  isArray,
  isPlainObject,
  map,
  pipe,
  stubTrue,
  values,
} = require('lodash/fp')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const valuesDeep = x =>
  cond([
    [
      isPlainObject,
      pipe(
        values,
        map(valuesDeep)
      ),
    ],
    [isArray, map(valuesDeep)],
    [stubTrue, castArray],
  ])(x)

const flatValuesDeep = pipe(
  valuesDeep,
  flattenDeep
)

module.exports = {
  siteMetadata: {
    title: 'Mason Architects',
    description: '',
    keywords: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-svgr',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
        trickle: false,
        minimum: 0.4,
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        autoLabel: process.env.NODE_ENV === 'development',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: path.resolve(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'projects',
        query: `
          {
            allPrismicProject {
              edges {
                node {
                  id
                  uid
                  data {
                    title {
                      text
                    }
                    image {
                      url               
                    }
                    meta_title1
                    meta_description1
                    layout {
                      ... on PrismicProjectLayoutHero {
                        primary {
                          project_title {
                            text
                          }
                          project_subtitle {
                            text
                          }
                          project_type {
                            text
                          }
                        }                       
                      }
                      ... on PrismicProjectLayoutSlice {
                        primary {
                          text {
                            text
                          }
                        }                        
                      }
                      ... on PrismicProjectLayoutFullImage {
                        primary {
                          caption {
                            text
                          }
                        }                        
                      }
                      ... on PrismicProjectLayoutSideBySideText {
                        primary {
                          left_text {
                            text
                          }
                          right_text {
                            text
                          }
                        }                        
                      }
                      ... on PrismicProjectLayoutSideBySideImages {
                        primary {
                          caption {
                            text
                          }
                        }                        
                      }
                      ... on PrismicProjectLayoutCallToAction {
                        primary {
                          text {
                            text
                          }
                          button_text
                        }                        
                      }                    
                    }
                  }
                }
              }
            }
          }
        `,
        store: [
          'id',
          'path',
          'title',
          'image',
          'metaTitle',
          'metaDescription',
          'excerpt',
        ],
        normalizer: ({ data }) =>
          get(data, 'allPrismicProject.edges').map(({ node }) => {
            const content = flatValuesDeep(get(node, 'data.layout')).join(' ')

            return {
              id: node.id,
              path: node.uid === 'home' ? '/' : `/${node.uid}`,
              title: get(node, 'data.title.text'),
              metaTitle: get(node, 'data.meta_title'),
              metaDescription: get(node, 'data.meta_description'),
              image: get(node, "data.image.url"),
              content,
              excerpt: truncate(content, 200),
            }
          }),
      },
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'pages',
        query: `
          {
            allPrismicPage {
              edges {
                node {
                  id
                  uid
                  data {
                    title {
                      text
                    }
                    meta_title1
                    meta_description1
                    layout {
                      ... on PrismicPageLayoutSubPageHero {
                        primary {
                          title1 {
                            text
                          }                          
                        }                       
                      }
                      ... on PrismicPageLayoutCtaBar {
                        primary {
                          title1 {
                            text
                          }
                          text {
                            text
                          }
                        }                        
                      }
                      ... on PrismicPageLayoutServices {
                        primary {
                          title1 {
                            text
                          }
                          text {
                            text
                          }
                          description {
                            text
                          }
                        }                        
                      }
                      ... on PrismicPageLayoutTextBlock {
                        primary {
                          content {
                            text
                          }                          
                        }                        
                      }
                      ... on PrismicPageLayoutSplitPanels {
                        items {
                          title1 {
                            text
                          }
                          description {
                            text
                          }                          
                        }                        
                      }                                         
                    }
                  }
                }
              }
            }
          }
        `,
        store: [
          'id',
          'path',
          'title',
          'metaTitle',
          'metaDescription',
          'excerpt',
        ],
        normalizer: ({ data }) =>
          get(data, 'allPrismicPage.edges').map(({ node }) => {
            const content = flatValuesDeep(get(node, 'data.layout')).join(' ')

            return {
              id: node.id,
              path: node.uid === 'home' ? '/' : `/${node.uid}`,
              title: get(node, 'data.title.text'),
              metaTitle: get(node, 'data.meta_title'),
              metaDescription: get(node, 'data.meta_description'),
              content,
              excerpt: truncate(content, 200),
            }
          }),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: () => doc => (doc.uid === 'home' ? '/' : `/${doc.uid}/`),
      },
    },
    {
      resolve: 'gatsby-plugin-bugherd',
      options: {
        key: 'wi4lcps15xlmmpaktwznxg',
        showInProduction: true,
      },
    },
    'gatsby-transformer-sharp',    
    'gatsby-plugin-netlify-cache',
  ],
}
