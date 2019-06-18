import React, { useEffect, useMemo } from 'react'
import { navigate, useStaticQuery, graphql } from 'gatsby'
import { usePrismicPreview } from 'gatsby-source-prismic'
import logoicon from 'assets/logo-yellow.svg'
import { map, includes, flatten, compose } from 'lodash/fp'

import styled from 'react-emotion'
import t from 'theme'

const StyledPreviewContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${t.c.darkgrey1};
  flex-direction: column;
`

const StyledLoadingText = styled.h2`
  font-size: 2rem;
  color: white;
  font-family: ${t.ff.serif};
`

const PreviewPage = ({ location }) => {
  const result = useStaticQuery(allPrismicPages)

  const allPrismicPageUids = useMemo(
    () =>
      compose(
        map('node.uid'),
        flatten,
        map('edges')
      )(result),
    [result]
  )

  const linkResolver = doc => (doc.uid === 'home' ? '/' : `/${doc.uid}/`)

  const pathResolver = doc =>
    includes(doc.uid, allPrismicPageUids) ? linkResolver(doc) : '/unpublished'

  const { previewData, path } = usePrismicPreview(location, {
    linkResolver: () => doc => linkResolver(doc),
    htmlSerializer: () => {},
    pathResolver: pathResolver,
  })

  useEffect(
    () => {
      if (previewData) {
        window.__PRISMIC_PREVIEW_DATA = previewData
        navigate(path)
      }
    },
    [previewData, path]
  )

  return (
    <StyledPreviewContainer>
      <img src={logoicon} width="200px" height="200px" alt="" />
      <StyledLoadingText>Loading preview content...</StyledLoadingText>
    </StyledPreviewContainer>
  )
}

export default PreviewPage

const allPrismicPages = graphql`
  {
    allPrismicPage {
      edges {
        node {
          uid
        }
      }
    }
    allPrismicProject {
      edges {
        node {
          uid
        }
      }
    }
    allPrismicNewsPost {
      edges {
        node {
          uid
        }
      }
    }
    allPrismicTeamMember {
      edges {
        node {
          uid
        }
      }
    }
  }
`
