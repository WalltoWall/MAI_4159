import React from 'react'
import { get, isString } from 'lodash'
import { 
  QuoteContainer,
  Quote, 
  ClipOverlay,
  ClipContainer,
} 
from './QuoteBlock.styled'

export const QuoteBlock = ({ index, data, list }) => {
  let context = ''
  switch (index) {
    case 0:
      context = 'mobileTop'
      break
    case 8:
      context = 'mobileMiddle'
      break
    case 2:
      context = 'desktopTop'
      break
    case 6:
      context = 'desktopMiddle'
      break
    case list.length - 1:
      context = 'bottomEnd'
      break
    default:
  }

  if (isString(context)) {
    return (
      <>
        {context === 'mobileTop' && (
          <QuoteContainer context={'mobile'}>
            <Quote
              html={get(data, 'primary.top_quote.html')}              
              align={'right'}
            />
            <ClipContainer align={'right'}>
              <ClipOverlay align={'right'}/>
            </ClipContainer>
          </QuoteContainer>
        )}
        {context === 'mobileMiddle' && (
          <QuoteContainer context={'mobile'}>
            <Quote
              html={get(data, 'primary.middle_quote.html')}              
              align={'left'}
            />
            <ClipContainer align={'left'}>
              <ClipOverlay align={'left'}/>
            </ClipContainer>
          </QuoteContainer>
        )}
        {context === 'desktopTop' && (
          <QuoteContainer context={'desktop'}>            
            <Quote
              html={get(data, 'primary.top_quote.html')}              
              align={'right'}
            />         
            <ClipContainer align={'right'}>   
              <ClipOverlay align={'right'}/>
            </ClipContainer>
            
          </QuoteContainer>
        )}
        {context === 'desktopMiddle' && (
          <QuoteContainer context={'desktop'}>
            <Quote
              html={get(data, 'primary.middle_quote.html')}              
              align={'left'}
            />
            <ClipContainer align={'left'}>
              <ClipOverlay align={'left'}/>
            </ClipContainer>
          </QuoteContainer>
        )}
        {context === 'bottomEnd' && (
          <QuoteContainer bottom={true} >
            <Quote 
              html={get(data, 'primary.bottom_quote.html')} 
              align={'right'}               
            />
            <ClipContainer align={'right'}> 
              <ClipOverlay align={'right'}/>
            </ClipContainer> 
          </QuoteContainer>
        )}
      </>
    )
  }
}
