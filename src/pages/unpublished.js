import React from 'react'
import { keysIn, head } from 'lodash'

import PageTemplate from 'src/templates/page'
import NewsPostTemplate from 'src/templates/newsPost'
import ProjectTemplate from 'src/templates/project'
import TeamMemberTemplate from 'src/templates/teamMember'

export const UnpublishedPage = ({ location, ...props }) => {
  const previewData = window.__PRISMIC_PREVIEW_DATA
  const customType = head(keysIn(previewData))

  switch (customType) {
    case 'prismicProject':
      return <ProjectTemplate location={location} {...props} />

    case 'prismicNewsPost':
      return <NewsPostTemplate location={location} {...props} />

    case 'prismicTeamMember':
      return <TeamMemberTemplate location={location} {...props} />

    default:
      return <PageTemplate location={location} {...props} />
  }
}

export default UnpublishedPage
