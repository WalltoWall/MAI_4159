import React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { Helmet } from 'react-helmet'
import styled from 'react-emotion'
import t from 'theme'
import Typekit from 'react-typekit'
import 'modern-normalize'
import 'typeface-abhaya-libre'
import 'typeface-barlow-condensed'
import 'typeface-lato'

import AssetLogoIconSVG from '../assets/logo-yellow.svg'

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

export const PreviewPage = ({ isPreview }) => {
  if (isPreview === false)
    return (
      <p>
        You're on the preview page, but it looks like we don't have any data to
        preview!
      </p>
    )

  return (
    <>
      <Helmet>
        <Typekit kitId="air2qxr" />
        <style>@import url("https://use.typekit.net/air2qxr.css");</style>
      </Helmet>

      <StyledPreviewContainer>
        <img src={AssetLogoIconSVG} width="200px" height="200px" alt="" />
        <StyledLoadingText>Loading preview content...</StyledLoadingText>
      </StyledPreviewContainer>
    </>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
  linkResolver: () => doc => (doc.uid === 'home' ? '/' : `/${doc.uid}/`),
})
