import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div``

export const Text = styled.div`
  color: ${p => p.textColor};
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-weight: 700;
`

export const Images = styled.div``

export const ImageContainer = styled.div``

export const Image = styled.img`
  max-width: 100px;
  max-height: 100px;
`
