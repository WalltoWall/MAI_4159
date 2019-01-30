import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Layout } from 'components/Layout'
import { Placeholder } from 'components/Placeholder'
import { NewsPostLayoutTitle } from 'slices/NewsPostLayoutTitle'
import { NewsPostLayoutHero } from 'slices/NewsPostLayoutHero'
import { NewsPostLayoutTextBlock } from 'slices/NewsPostLayoutTextBlock'
import { NewsPostLayoutSideBySideImages } from 'slices/NewsPostLayoutSideBySideImages'
import { NewsPostLayoutFullImage } from 'slices/NewsPostLayoutFullImage'
import { NewsPostLayoutCmsGuideText } from 'slices/NewsPostLayoutCmsGuideText'

const NewsPostTemplate = ({ data }) => (
  <div>
    <Helmet title={get(data, 'prismicNewsPost.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicNewsPost.data.layout') || []}
        map={{
          NewsPostLayoutTitle,
          NewsPostLayoutHero,
          NewsPostLayoutTextBlock,
          NewsPostLayoutSideBySideImages,
          NewsPostLayoutFullImage,
          NewsPostLayoutCmsGuideText,
        }}
        page={get(data, 'prismicNewsPost')}
        rootData={data}
      />
      <Placeholder />
    </Layout>
  </div>
)

export default NewsPostTemplate

export const query = graphql`
  query NewsPostTemplate($id: String!) {
    prismicNewsPost(id: { eq: $id }) {
      data {
        publish_date
        title {
          text
        }
        layout {
          __typename
        }
      }
    }
    ...NewsPostLayoutTitle
    ...NewsPostLayoutHero
    ...NewsPostLayoutTextBlock
    ...NewsPostLayoutSideBySideImages
    ...NewsPostLayoutFullImage
    ...NewsPostLayoutCmsGuideText
  }
`
