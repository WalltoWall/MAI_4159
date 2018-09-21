import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.li`
  list-style: none;
  margin-bottom: ${t.s(1)};
  padding-bottom: ${t.s(1)};
  border-bottom: 1px solid ${t.c.tanLight};

  &:first-child {
    padding-top: ${t.s(1)};
    border-top: 1px solid ${t.c.tanLight};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${t.mq.m} {
    margin-bottom: ${t.s(2)};
    padding-bottom: ${t.s(2)};

    &:first-child {
      padding-top: ${t.s(2)};
    }
  }
`
