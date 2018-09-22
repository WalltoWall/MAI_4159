
import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout } from 'components/Layout'
import { PageLayoutHero } from 'slices/PageLayoutHero'
import { PageLayoutProjectBoxes } from 'slices/PageLayoutProjectBoxes'
import { PageLayoutSplitPanels } from 'slices/PageLayoutSplitPanels'
import { PageLayoutCards } from 'slices/PageLayoutCards'
import { PageLayoutCategoriesBar } from 'slices/PageLayoutCategoriesBar'
import { PageLayoutSubPageHero } from 'slices/PageLayoutSubPageHero'
import { PageLayoutPortfolioGridTop } from 'slices/PageLayoutPortfolioGridTop'
import { PageLayoutPortfolioGridBottom } from 'slices/PageLayoutPortfolioGridBottom'
import { PageLayoutCtaBar } from 'slices/PageLayoutCtaBar'
import { PageLayoutServices } from 'slices/PageLayoutServices'
import { PageLayoutFeatureList } from 'slices/PageLayoutFeatureList'
import { PageLayoutTextBlock } from 'slices/PageLayoutTextBlock'
import { PageLayoutLargeSubpageHero } from 'slices/PageLayoutLargeSubpageHero'
import { PageLayoutNewsSection } from 'slices/PageLayoutNewsSection'


const PageTemplate = ({ data }) => (
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
          PageLayoutCards,
          PageLayoutCategoriesBar,
          PageLayoutSubPageHero,
          PageLayoutPortfolioGridTop,
          PageLayoutPortfolioGridBottom,
          PageLayoutCtaBar,
          PageLayoutServices,
          PageLayoutFeatureList,
          PageLayoutTextBlock,
          PageLayoutLargeSubpageHero,
          PageLayoutNewsSection,
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
    ...PageLayoutHero
    ...PageLayoutProjectBoxes
    ...PageLayoutSplitPanels
    ...PageLayoutCards
    ...PageLayoutSubPageHero
    ...PageLayoutCategoriesBar
    ...PageLayoutPortfolioGridTop
    ...PageLayoutPortfolioGridBottom
    ...PageLayoutCtaBar
    ...PageLayoutServices
    ...PageLayoutFeatureList
    ...PageLayoutTextBlock
    ...PageLayoutLargeSubpageHero
    ...PageLayoutNewsSection
  }
`
