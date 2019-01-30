const path = require('path')
const dotenv = require('dotenv')
const truncate = require('truncate')
const {
  castArray,
  cond,
  compose,
  flatten,
  flattenDeep,
  isArray,
  isPlainObject,
  get,
  getOr,
  map,
  pipe,
  stubTrue,
  values,
} = require('lodash/fp')

// Load .env files.
// .env.development - Loaded during `yarn develop`
// .env.production  - Loaded during `yarn build`
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Configure the following constants for the project.
const SITE_TITLE = 'MASON'
const SITE_TITLE_SHORT = 'MASON'
const SITE_DESCRIPTION =
  'We help shape Hawaii’s future, from historic places to contemporary buildings, designing and reimagining architecture that keeps our heritage relevant for our community.'
const SITE_URL = 'https://masonarch.com'

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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: '',
  },
  plugins: [
    // polyfill.io is strictly for local development on IE 11. It is
    // unnecessary on production since Babel should include everything it
    // needs.
    process.env.NODE_ENV === 'development' && 'gatsby-plugin-polyfill-io',
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
        autoLabel: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        helpers: '@walltowall/helpers',
        src: path.join(__dirname, 'src'),
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
        controllers: path.join(__dirname, 'src', 'controllers'),
        lib: path.join(__dirname, 'src', 'lib'),
        pages: path.join(__dirname, 'src', 'pages'),
        slices: path.join(__dirname, 'src', 'slices'),
        templates: path.join(__dirname, 'src', 'templates'),
        theme: path.join(__dirname, 'src', 'theme.js'),
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
            allPrismicProject (filter: {tags: {ne: "CMS Guide"}}) {
              edges {
                node {
                  id
                  uid
                  data {
                    title {
                      text
                    }   
                    project_thumb_image {
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
                      ... on PrismicProjectLayoutQuoteBlock {
                        primary {
                          quote {
                            text
                          }
                          author {
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
        normalizer: ({
            data
          }) =>
          get('allPrismicProject.edges', data).map(({
            node
          }) => {
            const content = flatValuesDeep(get('data.layout', node)).join(' ')

            return {
              id: node.id,
              path: node.uid === 'home' ? '/' : `/${node.uid}`,
              title: get('data.title.text', node),
              metaTitle: get('data.meta_title', node),
              metaDescription: get('data.meta_description', node),
              image: get('data.project_thumb_image.url', node),
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
            allPrismicPage (filter: {tags: {ne: "CMS Guide"}}) {
              edges {
                node {
                  id
                  uid
                  data {
                    title {
                      text
                    }
                    meta_title
                    meta_description
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
            allPrismicTeamMember (filter: {tags: {ne: "CMS Guide"}}) {
              edges {
                node {
                  id
                  uid
                  data {
                    title                  
                    meta_title
                    meta_description               
                    layout {
                      ... on PrismicTeamMemberLayoutHero {
                        primary {
                          title1
                        }                       
                      }         
                      ... on PrismicTeamMemberLayoutSideBySideText {
                        primary {
                          qualifications {
                            text
                          }     
                          experience {
                            text
                          }                  
                        }                        
                        items {
                          award_name
                          award_detail {
                            text
                          }
                        }     
                      }
                      ... on PrismicTeamMemberLayoutTextBlock {
                        primary {
                          content {
                            text
                          }                       
                        }                        
                      }                                         
                      ... on PrismicTeamMemberLayoutBioSummary {
                        primary {
                          name1
                          position                     
                          quote {
                            text
                          }
                          email
                        }                       
                      }                                                           
                    }
                  }
                }
              }
            }
            allPrismicNewsPost (filter: {tags: {ne: "CMS Guide"}}) {
              edges {
                node {
                  id
                  uid                       
                  data {                    
                    title {
                      text
                    }       
                    meta_title
                    meta_description             
                    article_title1 {
                      text
                    }
                    article_content {
                      text
                    }
                    layout {
                      ... on PrismicNewsPostLayoutHero {
                        primary {
                          title1  {
                            text
                          }
                        }                       
                      }
                      ... on PrismicNewsPostLayoutTextBlock {
                        primary {
                          content {
                            text
                          }                       
                        }                        
                      }
                      ... on PrismicNewsPostLayoutTitle {
                        primary {
                          title1 {
                            text
                          }             
                        }                        
                      }         
                      ... on PrismicNewsPostLayoutSideBySideImages {
                        primary {
                          caption {
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
        normalizer: ({
          data
        }) => {
          const nodes = compose(
            map(node => {
              const content = flatValuesDeep(get('data.layout', node)).join(' ')

              return {
                id: get('id', node),
                path: get('uid', node) === 'home' ? '/' : `/${get('uid', node)}`,
                title: getOr(get('data.title', node), 'data.title.text', node),
                metaTitle: get('data.meta_title', node),
                metaDescription: get('data.meta_description', node),
                content,
                excerpt: truncate(content, 200),
              }
            }),
            map(get('node')),
            flatten,
            map(get('edges')),
            values
          )(data)
          return nodes
        },
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
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: SITE_TITLE,
        short_name: SITE_TITLE_SHORT,
        start_url: '/',
        background_color: '#000000',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: path.join('src', 'assets', 'manifest-icon.png'),
      },
    },

    // NOTE: Must be placed at the end of the file in this order!
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ].filter(Boolean),
}