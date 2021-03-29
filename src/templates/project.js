import React from 'react'
import { Helmet } from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { withPreview } from 'gatsby-source-prismic'
import { Layout } from 'components/Layout'
import { ProjectLayoutHero } from 'slices/ProjectLayoutHero'
import { ProjectLayoutSlice } from 'slices/ProjectLayoutSlice'
import { ProjectLayoutSideBySideText } from 'slices/ProjectLayoutSideBySideText'
import { ProjectLayoutFullImage } from 'slices/ProjectLayoutFullImage'
import { ProjectLayoutSideBySideImages } from 'slices/ProjectLayoutSideBySideImages'
import { ProjectLayoutCallToAction } from 'slices/ProjectLayoutCallToAction'
import { ProjectLayoutFeatureList } from 'slices/ProjectLayoutFeatureList'
import { ProjectLayoutQuoteBlock } from 'slices/ProjectLayoutQuoteBlock'
import { ProjectLayoutCmsHero } from 'slices/ProjectLayoutCmsHero'
import { ProjectLayoutCmsGuideText } from 'slices/ProjectLayoutCmsGuideText'
import { ProjectLayoutSpacingModifier } from 'slices/ProjectLayoutSpacingModifier'
import { ProjectLayoutSideBySideTextImage } from 'slices/ProjectLayoutSideBySideTextImage'

const ProjectTemplate = ({ data, location }) => {
  return (
    <>
      <Helmet>
        <title>
          {get(data, 'prismicProject.data.meta_title1') ||
            get(data, 'prismicProject.data.title.text')}
        </title>
        {get(data, 'prismicProject.data.meta_description1') && (
          <meta
            name="description"
            content={get(data, 'prismicProject.data.meta_description1')}
          />
        )}
      </Helmet>
      <Layout>
        <MapToComponents
          getKey={x => x.id}
          getType={x => x.__typename.replace(/^Prismic/, '')}
          list={get(data, 'prismicProject.data.layout') || []}
          map={{
            ProjectLayoutHero,
            ProjectLayoutFullImage,
            ProjectLayoutSideBySideImages,
            ProjectLayoutCallToAction,
            ProjectLayoutFeatureList,
            ProjectLayoutSlice,
            ProjectLayoutSideBySideText,
            ProjectLayoutQuoteBlock,
            ProjectLayoutCmsHero,
            ProjectLayoutCmsGuideText,
            ProjectLayoutSpacingModifier,
            ProjectLayoutSideBySideTextImage,
          }}
          page={get(data, 'prismicProject')}
          rootData={data}
          location={location}
        />
      </Layout>
    </>
  )
}

export default withPreview(ProjectTemplate)

export const query = graphql`
  query ProjectTemplate($id: String!) {
    prismicProject(id: { eq: $id }) {
      _previewable
      data {
        title {
          text
        }
        meta_title1
        meta_description1
        layout {
          __typename
        }
      }
    }
    ...ProjectLayoutHero
    ...ProjectLayoutSlice
    ...ProjectLayoutFullImage
    ...ProjectLayoutSideBySideImages
    ...ProjectLayoutCallToAction
    ...ProjectLayoutFeatureList
    ...ProjectLayoutSideBySideText
    ...ProjectLayoutQuoteBlock
    ...ProjectLayoutCmsHero
    ...ProjectLayoutCmsGuideText
    ...ProjectLayoutSpacingModifier
    ...ProjectLayoutSideBySideTextImage
  }
`
