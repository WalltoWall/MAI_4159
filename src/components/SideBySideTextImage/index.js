import React from 'react'
import { get, size, head, map } from 'lodash'
import { Image } from 'components/Image'

import {
  Container,
  Content,
  ImageContainer,
  ItemContainer,
  TextContent,
  Title,
  StyledHTMLContent,
} from './index.styled'

const renderItem = item => {
  const { title_text, body_text, image_position } = item
  const imageURL = get(item, 'image.url')
  const imageFluid = get(item, 'image.localFile.childImageSharp.fluid')

  return (
    <ItemContainer imagePosition={image_position}>
      <TextContent imagePosition={image_position}>
        <Title>{title_text}</Title>
        <StyledHTMLContent html={body_text.html} />
      </TextContent>
      {(imageURL || imageFluid) && (
        <ImageContainer>
          <Image
            alt={get(item, 'image.alt', '')}
            src={imageURL}
            fluid={imageFluid}
            fadeIn={false}
          />
        </ImageContainer>
      )}
    </ItemContainer>
  )
}

export const SideBySideTextImage = ({ data }) => {
  const { items } = data
  const itemsSize = size(items)

  return (
    <Container>
      {itemsSize === 1 ? (
        <Content>{renderItem(head(items))}</Content>
      ) : (
        <Content>{map(items, item => renderItem(item))}</Content>
      )}
    </Container>
  )
}
