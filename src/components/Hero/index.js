import React from 'react'
import { get, isEmpty } from 'lodash'
import { MobileNavOverlay } from 'components/Header/Mobile.styled'
import { getUnlessEmpty } from 'helpers'
import defaultTexture from 'assets/marble_texture.jpg'
import {
  ClipOverlay,
  ImageContainer,
  StyledImage,
  Title,
  TitleWrapper,
  PlaceholderImg,
} from './index.styled'

export const Hero = ({ data, whitebg, subpage }) => {
  const imageFluid = get(data, 'primary.image.fluid')
  const imageURL = get(data, 'primary.image.url')

  return (
    <ImageContainer>
      {imageFluid || imageURL ? (
        <StyledImage
          alt={getUnlessEmpty('primary.image.alt', data)}
          src={imageURL}
          fluid={imageFluid}
        />
      ) : (
        <PlaceholderImg
          alt="marble texture backgrond image"
          src={defaultTexture}
        />
      )}
      <ClipOverlay
        has_filter={get(data, 'primary.has_filter')}
        whitebg={whitebg ? true : false}
      />
      {!isEmpty(get(data, 'primary.title1.text')) && (
        <TitleWrapper>
          <Title>{get(data, 'primary.title1.text')}</Title>
        </TitleWrapper>
      )}
      <MobileNavOverlay subpage={subpage ? true : false} />
    </ImageContainer>
  )
}
