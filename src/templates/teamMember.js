import React from 'react'
import { Helmet } from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import { get } from 'lodash'
import { Layout } from 'components/Layout'
import { TeamMemberLayoutHero } from 'slices/TeamMemberLayoutHero'
import { TeamMemberLayoutBioSummary } from 'slices/TeamMemberLayoutBioSummary'
import { TeamMemberLayoutTextBlock } from 'slices/TeamMemberLayoutTextBlock'
import { TeamMemberLayoutSideBySideText } from 'slices/TeamMemberLayoutSideBySideText'
import { TeamMemberLayoutFeaturedList } from 'slices/TeamMemberLayoutFeaturedList'
import { TeamMemberLayoutCtaBar } from 'slices/TeamMemberLayoutCtaBar'
import { TeamMemberLayoutCmsGuideText } from 'slices/TeamMemberLayoutCmsGuideText'
import { TeamMemberLayoutSideBySideTextImage } from 'slices/TeamMemberLayoutSideBySideTextImage'
import { TeamMemberLayoutSpacingModifier } from 'slices/TeamMemberLayoutSpacingModifier'

const TeamMemberTemplate = ({ data, location }) => {
  return (
    <>
      <Helmet title={get(data, 'prismicTeamMember.data.title.text')} />
      <Layout>
        <MapToComponents
          getKey={x => x.id}
          getType={x => x.__typename.replace(/^Prismic/, '')}
          list={get(data, 'prismicTeamMember.data.layout') || []}
          map={{
            TeamMemberLayoutHero,
            TeamMemberLayoutBioSummary,
            TeamMemberLayoutTextBlock,
            TeamMemberLayoutSideBySideText,
            TeamMemberLayoutFeaturedList,
            TeamMemberLayoutCtaBar,
            TeamMemberLayoutCmsGuideText,
            TeamMemberLayoutSideBySideTextImage,
            TeamMemberLayoutSpacingModifier,
          }}
          page={get(data, 'prismicTeamMember')}
          rootData={data}
          location={location}
        />
      </Layout>
    </>
  )
}

export default withPreview(TeamMemberTemplate)

export const query = graphql`
  query TeamMemberTemplate($id: String!) {
    prismicTeamMember(id: { eq: $id }) {
      data {
        title
        layout {
          __typename
        }
      }
    }
    ...TeamMemberLayoutHero
    ...TeamMemberLayoutBioSummary
    ...TeamMemberLayoutTextBlock
    ...TeamMemberLayoutSideBySideText
    ...TeamMemberLayoutFeaturedList
    ...TeamMemberLayoutCtaBar
    ...TeamMemberLayoutCmsGuideText
    ...TeamMemberLayoutSideBySideTextImage
    ...TeamMemberLayoutSpacingModifier
  }
`
