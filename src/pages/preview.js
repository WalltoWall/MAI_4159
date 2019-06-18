import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { usePrismicPreview } from 'gatsby-source-prismic'
import logoicon from 'assets/logo-yellow.svg'

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
`

const PreviewPage = ({ location }) => {
  const { previewData, path } = usePrismicPreview(location, {
    linkResolver: () => doc => (doc.uid === 'home' ? '/' : `/${doc.uid}/`),
    htmlSerializer: () => {},
    pathResolver: doc => (doc.uid === 'home' ? '/' : `/${doc.uid}/`),
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
  debugger
  return (
    <StyledPreviewContainer>
      <img src={logoicon} width="200px" height="200px" alt="" />
      <StyledLoadingText>Loading preview content...</StyledLoadingText>
    </StyledPreviewContainer>
  )
}

export default PreviewPage
