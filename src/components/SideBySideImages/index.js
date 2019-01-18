import React from 'react'
import { get } from 'lodash'
import {
  Container,
  ImageContainer,
  Description,
  StyledContent,
} from './index.styled'
import { getUnlessEmptyString } from 'helpers'
import { Image } from 'components/Image'

export const SideBySideImages = ({ data }) => (
  <Container>
    <StyledContent>
      {get(data, 'items').map(item => (
        <ImageContainer>
          <Image
            key={getUnlessEmptyString(data, 'primary.image1.alt')}
            alt={getUnlessEmptyString(data, 'primary.image1.alt')}
            fluid={get(item, 'image1.localFile.childImageSharp.fluid')}
            fadeIn={false}
          />
        </ImageContainer>
      ))}
      <Description>{get(data, 'primary.caption.text')}</Description>
    </StyledContent>
  </Container>
)
