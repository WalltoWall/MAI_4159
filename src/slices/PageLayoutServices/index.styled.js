import styled from 'react-emotion'
import t from 'theme'

const orientation = ({ photo_orientation }) => {
  switch (photo_orientation) {
    case 'left':
      return `
        order: 1;
      `

    default:
      return `
        order: 3;
      `
  }
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${t.c.lightgrey1};
  padding: 2rem 2rem 5rem 2rem;
`

export const Title = styled.h2`
  font-family: ${t.ff.sans};
  text-transform: uppercase;
  font-size: ${t.s(3)};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
  font-weight: 600;
  text-align: center;
`

export const Content = styled.div`
  color: ${t.c.darkgrey1};
  font-family: ${t.ff.sans2};
  line-height: ${t.lh.copy};
  width: 100%;
  text-align: center;
  margin: -1rem 0 1rem 0;
  ${t.mq.l} {
    width: 60%;
  }
`
export const Image = styled.img`
  width: 100%;
  padding: 0;
  object-fit: cover;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem auto;
  ${t.mq.l} {
    width: 80%;
  }
`
export const ImageWrapper = styled.div`
  max-height: 500px;
  overflow: hidden;
  width: 100%;
  order: 0;
  ${t.mq.l} {
    width: 50%;
    ${orientation};
  }
`

export const TextWrapper = styled.div`
  width: 100%;
  order: 2;
  ${t.mq.l} {
    width: 40%;
    margin: 0 2rem;
    ${orientation};
  }`

export const Subhead = styled.h2`
  font-family: ${t.ff.sans};
  font-weight: 600;
  text-transform: uppercase;
  font-size: ${t.s(2)};
  color: ${t.c.darkgrey1};
  letter-spacing: 0.1rem;
`

export const Description = styled.div`
  font-family: ${t.ff.sans2};
  font-weight: 400;
  line-height: ${t.lh.copy};
  font-size: ${t.s(0)};
  color: ${t.c.darkgrey1};
  display: block;
`

export const RelatedProjects = styled.div`
  display:block
`
