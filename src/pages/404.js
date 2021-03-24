import React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'

import PageTemplate from '../templates/page'
import NewsPostTemplate from '../templates/newsPost'
import ProjectTemplate from '../templates/project'
import TeamMemberTemplate from '../templates/teamMember'

import { Layout } from 'components/Layout'
import { Button } from 'components/Button'
import { Container } from './_404.styled'

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Sorry, We can&apos;t find the page you requested.</h1>
      <p>To return to the main site, start here</p>
      <Button to="/">Back to Home</Button>
    </Container>
  </Layout>
)

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
    news_post: NewsPostTemplate,
    project: ProjectTemplate,
    team_member: TeamMemberTemplate,
  },
})
