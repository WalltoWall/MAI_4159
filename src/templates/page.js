import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout } from 'components/Layout'
import { PageLayoutText } from 'slices/PageLayoutText'
import { PageLayoutHero } from 'slices/PageLayoutHero'

const PageTemplate = ({ data }) => (
  <>
    <Helmet title={get(data, 'prismicPage.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicPage.data.layout')}
        map={{
          PageLayoutText,
          PageLayoutHero,
        }}
        page={get(data, 'prismicPage')}
        rootData={data}
      />
    </Layout>
  </>
)

export default PageTemplate

export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      data {
        title {
          text
        }
        layout {
          __typename
        }
      }
    }
    ...PageLayoutText
    ...PageLayoutHero
  }
`
