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
  const imageFluid = get(item, 'image1.localFile.childImageSharp.fluid')

  return (
    (imageURL || imageFluid) && (
      <ImageContainer key={getUnlessEmpty('primary.image1.alt', data)}>
        <StyledImage
          alt={getUnlessEmpty('primary.image1.alt', data)}
          src={imageURL}
          fluid={imageFluid}
          fadeIn={false}
        />
      </ImageContainer>
    )
  )
}

export const SideBySideImages = ({ data }) => (
  <Container>
    <Images>
      {get(data, 'items').map(item => (
        <Image item={item} data={data} />
      ))}
    </Images>

    <CaptionContainer>
      <Caption>{get(data, 'primary.caption.text')}</Caption>
    </CaptionContainer>
  </Container>
)
