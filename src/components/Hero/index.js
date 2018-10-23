import React from 'react'
import { get, isEmpty } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { getUnlessEmptyString } from 'helpers'
import {
  ClipOverlay,
  ImageContainer,
  StyledImage,
  Title,
  TitleWrapper,
} from './index.styled'

export const Hero = ({ data, whitebg, subpage }) => (
  <ImageContainer>
    <StyledImage
      alt={getUnlessEmptyString(get(data, 'primary.image.data'))}
      fluid={get(data, 'primary.image.localFile.childImageSharp.fluid')}
      fadeIn={false}
    />
    <ClipOverlay 
      has_filter={get(data, 'primary.has_filter')} 
      whitebg={whitebg ? true : false}
    />
    {!isEmpty(get(data, 'primary.title1.text')) && (
      <TitleWrapper>
        <Title>{get(data, 'primary.title1.text')}</Title>
      </TitleWrapper>
    )}
    <MobileNavOverlay subpage={subpage ? true : false}/>
  </ImageContainer>
)