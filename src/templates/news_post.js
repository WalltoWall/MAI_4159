import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Layout } from 'components/Layout'
import { NewsPostLayoutHero } from 'slices/NewsPostLayoutHero'

const NewsPostTemplate = ({ data }) => (
  <>
    <Helmet title={get(data, 'prismicNewsPost.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicNewsPost.data.layout') || []}
        map={{
          NewsPostLayoutHero,
        }}
        page={get(data, 'prismicNewsPost')}
        rootData={data}
      />
    </Layout>
  </>
)

export default NewsPostTemplate

export const query = graphql`
  query NewsPostTemplate($id: String!) {
    prismicNewsPost(id: { eq: $id }) {
      data {
        title {
          text
        }
        layout {
          __typename
        }
      }
    }
    ...NewsPostLayoutHero
  }
`
