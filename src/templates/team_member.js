import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Layout } from 'components/Layout'
import { TeamMemberLayoutHero } from 'slices/TeamMemberLayoutHero'

const TeamMemberTemplate = ({ data }) => (
  <>
    <Helmet title={get(data, 'prismicNewsPost.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicTeamMember.data.layout') || []}
        map={{
          TeamMemberLayoutHero,
        }}
        page={get(data, 'prismicTeamMember')}
        rootData={data}
      />
    </Layout>
  </>
)

export default TeamMemberTemplate

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
  }
`
