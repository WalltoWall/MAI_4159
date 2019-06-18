import React from 'react'
import { keysIn, head } from 'lodash'

import PageTemplate from 'src/templates/page'
import NewsPostTemplate from 'src/templates/newsPost'
import ProjectTemplate from 'src/templates/project'
import TeamMemberTemplate from 'src/templates/teamMember'

import { usePreviewData } from 'src/hooks.js'

export const UnpublishedPage = ({ location, ...props }) => {
  const previewData = usePreviewData()
  const customType = head(keysIn(previewData))

  switch (customType) {
    case 'prismicProject':
      return (
        <ProjectTemplate
          data={previewData ? null : {}}
          location={location}
          {...props}
        />
      )

    case 'prismicNewsPost':
      return (
        <NewsPostTemplate
          data={previewData ? null : {}}
          location={location}
          {...props}
        />
      )

    case 'prismicTeamMember':
      return (
        <TeamMemberTemplate
          data={previewData ? null : {}}
          location={location}
          {...props}
        />
      )

    default:
      return (
        <PageTemplate
          data={previewData ? null : {}}
          location={location}
          {...props}
        />
      )
  }
}

export default UnpublishedPage
