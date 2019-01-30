
import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  align-items: center;
  background-color: ${t.c.darkgrey2};
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${t.c.white};  
  text-align: center;
  h1 {
    
  }
  p {
    font-size: ${t.f(2)};
  }
`

