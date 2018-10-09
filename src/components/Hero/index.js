import React from 'react'
import { get, isEmpty } from 'lodash'
import { Image } from 'components/Image'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { getUnlessEmptyString } from 'helpers'
import {
  ClipOverlay,
  ImageContainer,
  Title,
  TitleWrapper,
} from './index.styled'

export const Hero = ({ data }) => (
  <ImageContainer>
    <Image
      alt={getUnlessEmptyString(get(data, 'primary.image.data'))}
      fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')}
      fadeIn={false}
    />
    <ClipOverlay />
    {!isEmpty(get(data, 'primary.title1.text')) && (
      <TitleWrapper>
        <Title>{get(data, 'primary.title1.text')}</Title>
      </TitleWrapper>
    )}
    <MobileNavOverlay />
  </ImageContainer>
)