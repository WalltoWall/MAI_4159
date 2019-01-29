import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'

export const StyledLink = styled(Link)`
  display: block;
  :hover {
    text-decoration: none !important;
  }
`
export const Container = styled.li`
  margin: 0 auto;
  list-style: none;
  margin-bottom: ${t.s(1)};
  padding-bottom: ${t.s(1)};

  &:last-child {
    margin-bottom: 0;
  }

  ${t.mq.m} {
    margin-bottom: ${t.s(0)};
    padding-bottom: ${t.s(2)};

    &:first-child {
      padding-top: ${t.s(2)};
    }
  }
`

export const Title = styled.div`
  font-size: ${t.f(2)};
  margin-bottom: 10px;
  color: ${t.c.darkgrey1};
  font-weight: 700;
  font-family: ${t.ff.sans2};
`

export const Excerpt = styled.p`
  color: ${t.c.darkgrey2};
  font-family: ${t.ff.sans2};
`
