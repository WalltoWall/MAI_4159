import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import { get } from 'lodash'

import t from 'theme'
import { DevRefreshButton } from 'components/DevRefreshButton'
import { Header } from 'components/Header'
import { Container } from './index.styled'

import 'modern-normalize'

injectGlobal`
  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${t.c.white};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const render = ({ children }) => queryData => (
  <>
    <Helmet
      titleTemplate={`%s – ${get(queryData, 'site.siteMetadata.title')}`}
      defaultTitle={get(queryData, 'site.siteMeta.title')}
      meta={[
        {
          name: 'description',
          content: get(queryData, 'site.siteMetadata.description'),
        },
        { name: 'keywords', content: get(queryData, 'site.siteMetadata.keywords') },
        { name: 'robots', content: 'noindex' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Header siteTitle={queryData.site.siteMetadata.title} />
    <Container>
      {process.env.NODE_ENV === 'development' && <DevRefreshButton />}
      {children}
    </Container>
  </>
)

export const Layout = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={render(props)}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
