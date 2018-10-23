import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout } from 'components/Layout'
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

const PageTemplate = ({ data, location }) => (
  <>
    <Helmet title={get(data, 'prismicPage.data.title.text')} />
    <Layout>
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
          PageLayoutSocialMedia,          
          PageLayoutTextExpandable,
          PageLayoutTeamGrid,
          PageLayoutFeaturedNews,
          PageLayoutGoogleMap,
          PageLayoutProjectListModule,
        }}
        page={get(data, 'prismicPage')}
        rootData={data}
        location={location}
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
  }
`
