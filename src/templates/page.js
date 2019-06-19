import React from 'react'
import { Helmet } from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { isPathActive } from 'helpers'
import { Layout } from 'components/Layout'
import { AuthWall } from 'controllers/AuthWall'
import { AuthForm } from 'components/AuthForm'
import { PageLayoutHero } from 'slices/PageLayoutHero'
import { PageLayoutProjectBoxes } from 'slices/PageLayoutProjectBoxes'
import { PageLayoutSplitPanels } from 'slices/PageLayoutSplitPanels'
import { PageLayoutSubPageHero } from 'slices/PageLayoutSubPageHero'
import { PageLayoutCtaBar } from 'slices/PageLayoutCtaBar'
import { PageLayoutServices } from 'slices/PageLayoutServices'
import { PageLayoutTextBlock } from 'slices/PageLayoutTextBlock'
import { PageLayoutNewsSection } from 'slices/PageLayoutNewsSection'
import { PageLayoutInfoBlock } from 'slices/PageLayoutInfoBlock'
import { PageLayoutSocialMedia } from 'slices/PageLayoutSocialMedia'
import { PageLayoutTextExpandable } from 'slices/PageLayoutTextExpandable'
import { PageLayoutTeamGrid } from 'slices/PageLayoutTeamGrid'
import { PageLayoutFeaturedNews } from 'slices/PageLayoutFeaturedNews'
import { PageLayoutGoogleMap } from 'slices/PageLayoutGoogleMap'
import { PageLayoutProjectListModule } from 'slices/PageLayoutProjectListModule'
import { PageLayoutAnchor } from 'slices/PageLayoutAnchor'
import { PageLayoutAnchorsMenu } from 'slices/PageLayoutAnchorsMenu'
import { PageLayoutCmsGuideText } from 'slices/PageLayoutCmsGuideText'
import { PageLayoutSideBySideImages } from 'slices/PageLayoutSideBySideImages'
import { PageLayoutFullImage } from 'slices/PageLayoutFullImage'
import { PageLayoutSideBySideTextImage } from 'slices/PageLayoutSideBySideTextImage'
import { mergePrismicPreviewData } from 'gatsby-source-prismic/dist/index.cjs'
import { deletePreviewData, getPreviewData } from 'src/hooks.js'

const PageTemplate = ({ data: staticData, location }) => {
  const renderSlices = data => (
    <MapToComponents
      getKey={x => x.id}
      getType={x => x.__typename.replace(/^Prismic/, '')}
      list={get(data, 'prismicPage.data.layout') || []}
      map={{
        PageLayoutHero,
        PageLayoutProjectBoxes,
        PageLayoutSplitPanels,
        PageLayoutSubPageHero,
        PageLayoutCtaBar,
        PageLayoutServices,
        PageLayoutTextBlock,
        PageLayoutNewsSection,
        PageLayoutInfoBlock,
        PageLayoutFullImage,
        PageLayoutSocialMedia,
        PageLayoutTextExpandable,
        PageLayoutTeamGrid,
        PageLayoutFeaturedNews,
        PageLayoutGoogleMap,
        PageLayoutProjectListModule,
        PageLayoutAnchor,
        PageLayoutSideBySideImages,
        PageLayoutAnchorsMenu,
        PageLayoutCmsGuideText,
        PageLayoutSideBySideTextImage,
      }}
      page={get(data, 'prismicPage')}
      rootData={data}
      location={location}
    />
  )

  const renderCmsGuideAuth = data => (
    <AuthWall
      id="cms-guide"
      passwordMd5={process.env.GATSBY_CMS_GUIDE_PASSWORD}
    >
      {({ authenticated, signin }) =>
        authenticated ? (
          renderSlices(data)
        ) : (
          <AuthForm onSubmit={({ password }) => signin(password)} />
        )
      }
    </AuthWall>
  )

  const previewData = getPreviewData()
  const data = mergePrismicPreviewData({ previewData, staticData })
  deletePreviewData()

  return (
    <>
      <Helmet>
        <title>
          {get(data, 'prismicPage.data.meta_title') ||
            get(data, 'prismicPage.data.title.text')}
        </title>
        {get(data, 'prismicPage.data.meta_description') && (
          <meta
            name="description"
            content={get(data, 'prismicPage.data.meta_description')}
          />
        )}
      </Helmet>
      <Layout>
        {isPathActive(location.pathname, '/cms-guide')
          ? renderCmsGuideAuth(data)
          : renderSlices(data)}
      </Layout>
    </>
  )
}

export default PageTemplate

export const query = graphql`
  query PageTemplate($id: String!) {
    prismicPage(id: { eq: $id }) {
      uid
      data {
        title {
          text
        }
        meta_title
        meta_description
        layout {
          __typename
        }
      }
    }
    ...PageLayoutHero
    ...PageLayoutProjectBoxes
    ...PageLayoutSplitPanels
    ...PageLayoutSubPageHero
    ...PageLayoutCtaBar
    ...PageLayoutServices
    ...PageLayoutTextBlock
    ...PageLayoutInfoBlock
    ...PageLayoutNewsSection
    ...PageLayoutSocialMedia
    ...PageLayoutTextExpandable
    ...PageLayoutTeamGrid
    ...PageLayoutFeaturedNews
    ...PageLayoutGoogleMap
    ...PageLayoutProjectListModule
    ...PageLayoutAnchor
    ...PageLayoutAnchorsMenu
    ...PageLayoutCmsGuideText
    ...PageLayoutFullImage
    ...PageLayoutSideBySideImages
    ...PageLayoutSideBySideTextImage
  }
`
