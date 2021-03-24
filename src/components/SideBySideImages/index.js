import React from 'react'
import { get } from 'lodash'
import {
  Container,
  ImageContainer,
  Caption,
  Images,
  StyledImage,
  CaptionContainer,
} from './index.styled'
import { getUnlessEmpty } from 'helpers'

const Image = ({ item, data }) => {
  const imageURL = get(item, 'image1.url')
  const imageFluid = get(item, 'image1.fluid')

  return (
    (imageURL || imageFluid) && (
      <ImageContainer key={getUnlessEmpty('primary.image1.alt', data)}>
        <StyledImage
          alt={getUnlessEmpty('primary.image1.alt', data)}
          src={imageURL}
          fluid={imageFluid}
        />
      </ImageContainer>
    )
  )
}

export const SideBySideImages = ({ data }) => {
  const caption = get(data, 'primary.caption.text')

  return (
    <Container>
      <Images>
        {get(data, 'items').map((item, idx) => (
          <Image key={idx} item={item} data={data} />
        ))}
      </Images>
      {caption && (
        <CaptionContainer>
          <Caption>{get(data, 'primary.caption.text')}</Caption>
        </CaptionContainer>
      )}
    </Container>
  )
}
