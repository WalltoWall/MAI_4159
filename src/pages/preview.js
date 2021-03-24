import React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'

import { Layout } from '../components/Layout'

const PreviewPage = ({ isPreview, isLoading }) => {
  if (isPreview === false) return 'Not a preview!'

  return (
    <Layout>
      <p>Loading preview...</p>
    </Layout>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
  linkResolver: () => doc => (doc.uid === 'home' ? '/' : `/${doc.uid}/`),
})
