import React from 'react'
import { get, isEmpty, toLower } from 'lodash'

import {
  QuoteContainer,
  Quote,
  ClipOverlay,
  ClipContainer,
} from './QuoteBlock.styled'

export const QuoteBlock = ({ data }) => {
  const angle = toLower(data.angle)
  const htmlContent = get(data, 'text1.html')
  const blockSize = get(data, 'minimum_size')

  return (
    <>
      {data.display === 'Mobile' && (
        <QuoteContainer context={'mobile'}>
          <Quote html={htmlContent} align={angle} />
          <ClipContainer align={angle}>
            <ClipOverlay align={angle} />
          </ClipContainer>
        </QuoteContainer>
      )}

      {data.display === 'Desktop' && (
        <QuoteContainer
          context={'desktop'}
          size={blockSize}
          onClick={e => e.preventDefault()}
        >
          <Quote html={htmlContent} align={angle} />
          <ClipContainer align={angle}>
            <ClipOverlay align={angle} />
          </ClipContainer>
        </QuoteContainer>
      )}
    </>
  )
}
