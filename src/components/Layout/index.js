import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import t from 'theme'
import { get } from 'lodash'
import { DevRefreshButton } from 'components/DevRefreshButton'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Container } from './index.styled'

import 'modern-normalize'
import 'typeface-abhaya-libre'
import 'typeface-barlow-condensed'
import 'typeface-lato'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
    width: 100%;
    margin: 0 auto;
    padding: 0;
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
        {
          name: 'keywords',
          content: get(queryData, 'site.siteMetadata.keywords'),
        },
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
    <Footer />
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
