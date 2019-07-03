import React from 'react'
import { Helmet } from 'react-helmet'
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
import { NewsPostLayoutFullImageGif } from 'slices/NewsPostLayoutFullImageGif'
import { NewsPostLayoutCmsGuideText } from 'slices/NewsPostLayoutCmsGuideText'
import { NewsPostLayoutSideBySideTextImage } from 'slices/NewsPostLayoutSideBySideTextImage'
import { NewsPostLayoutSpacingModifier } from 'slices/NewsPostLayoutSpacingModifier'
import { mergePrismicPreviewData } from 'gatsby-source-prismic/dist/index.cjs'
import { deletePreviewData, getPreviewData } from 'src/hooks.js'

const NewsPostTemplate = ({ data: staticData, location }) => {
  const previewData = getPreviewData()
  const data = mergePrismicPreviewData({ previewData, staticData })
  deletePreviewData()

  return (
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
            NewsPostLayoutFullImageGif,
            NewsPostLayoutSideBySideTextImage,
            NewsPostLayoutSpacingModifier,
          }}
          page={get(data, 'prismicNewsPost')}
          rootData={data}
          location={location}
        />
        <Placeholder />
      </Layout>
    </div>
  )
}

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
    ...NewsPostLayoutFullImageGif
    ...NewsPostLayoutSideBySideTextImage
    ...NewsPostLayoutSpacingModifier
  }
`
