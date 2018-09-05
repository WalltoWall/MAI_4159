
import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout } from 'components/Layout'
import { PageLayoutHero } from 'slices/PageLayoutHero'
import { PageLayoutProject } from 'slices/PageLayoutProject'
import { PageLayoutSplitPanels } from 'slices/PageLayoutSplitPanels'
import { PageLayoutCards } from 'slices/PageLayoutCards'
import { PageLayoutCategoriesBar } from 'slices/PageLayoutCategoriesBar'
import { PageLayoutSubPageHero } from 'slices/PageLayoutSubPageHero'
import { PageLayoutPortfolioGridTop } from 'slices/PageLayoutPortfolioGridTop'
import { PageLayoutPortfolioGridBottom } from 'slices/PageLayoutPortfolioGridBottom'
import { PageLayoutCtaBar } from 'slices/PageLayoutCtaBar'

const PageTemplate = ({ data }) => (
  <>
    <Helmet title={get(data, 'prismicPage.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicPage.data.layout')}
        map={{
          PageLayoutHero,
          PageLayoutProject,
          PageLayoutSplitPanels,
          PageLayoutCards,
          PageLayoutCategoriesBar,
          PageLayoutSubPageHero,
          PageLayoutPortfolioGridTop,
          PageLayoutPortfolioGridBottom,
          PageLayoutCtaBar,
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
    ...PageLayoutProject
    ...PageLayoutSplitPanels
    ...PageLayoutCards
    ...PageLayoutSubPageHero
    ...PageLayoutCategoriesBar
    ...PageLayoutPortfolioGridTop
    ...PageLayoutPortfolioGridBottom
    ...PageLayoutCtaBar
  }
`
