import styled from 'react-emotion'
import t from 'theme'

import { HTMLContent } from 'components/HTMLContent'

export const Container = styled.div`
  background-color: ${t.c.white};
`

export const ContentWrapper = styled.div`
  margin: 1rem auto;
  width: 100%;
`

export const Content = styled.div`
  margin: 0 auto;
`

export const StyledHTMLContent = styled(HTMLContent)`
  text-align: center;
`
export const HeaderImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 100%;
`

export const ProjectGridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;  
  flex-wrap: wrap;  
`