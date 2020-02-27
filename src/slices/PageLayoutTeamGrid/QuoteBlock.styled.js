import styled from 'react-emotion'
import t from 'theme'
import { Link } from 'components/Link'
import { HTMLContent } from 'components/HTMLContent'

const getWidthFromProps = size => {
  switch (size) {
    case '1/4':
      return 'width: 25%'
    case '2/4':
      return 'width: 50%'
    case '3/4':
      return 'width: 75%'
    default:
      return 'width: 50%'
  }
}

export const QuoteContainer = styled(Link)`
  display: ${p => (p.context === 'mobile' ? 'flex' : 'none')};
  flex-grow: 1;
  position: relative;
  justify-content: flex-end;
  ${p => getWidthFromProps(p.size)};
  height: ${t.s(7.5)};

  ${t.mq.s} {
    height: ${t.s(9)};
  }
  ${t.mq.l} {
    cursor: default;
  }

  ${t.mq.xxx} {
    height: ${t.s(9.5)};
  }

  ${t.mq.l} {
    display: ${p => (p.context === 'desktop' ? 'flex' : 'none')};
  }
`

export const Quote = styled(HTMLContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${t.c.yellow};
  position: relative;
  z-index: 98;
  width: 100%;
  align-items: ${p => (p.align === 'right' ? 'flex-start' : 'flex-end')};
  p {
    font-size: ${t.f(0)};
    font-family: ${t.ff.serif};
    font-weight: 400;
    color: ${t.c.darkgrey1};
    z-index: 5;
    width: 100%;
    line-height: 1.3rem;
    text-align: ${p => (p.align === 'left' ? 'right' : 'left')};
    padding: 0 ${t.s(0.2)};
    ${t.mq.s} {
      font-size: ${t.f(1)};
      line-height: 1.6rem;
    }
    ${t.mq.l} {
      width: 90%;
      padding-right: ${p => (p.align === 'left' ? t.s(1) : '0')};
      padding-left: ${p => (p.align === 'right' ? t.s(1) : '0')};
    }
    ${t.mq.x} {
      width: 80%;
      padding-right: ${p => (p.align === 'left' ? t.s(4) : '0')};
      padding-left: ${p => (p.align === 'right' ? t.s(4) : '0')};
      font-size: ${t.f(2)};
      line-height: 2rem;
    }
  }
`

export const ClipOverlay = styled.div`
  position: absolute;
  background-color: ${t.c.yellow};
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg);
  z-index: 5;
  height: 130%;
  width: 52%;
  top: ${p => (p.align === 'right' ? '-38px' : '-50px')};
  left: ${p => (p.align === 'right' ? 'unset' : '117px')};
  right: ${p => (p.align === 'right' ? '120px' : 'unset')};

  ${t.mq.m} {
    left: ${p => (p.align === 'right' ? 'unset' : '111px')};
    right: ${p => (p.align === 'right' ? '110px' : 'unset')};
  }

  ${t.mq.x} {
    left: ${p => (p.align === 'right' ? 'unset' : '111px')};
    right: ${p => (p.align === 'right' ? '110px' : 'unset')};
  }
`

export const ClipContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 5;
  height: 100%;
  overflow: hidden;
  ${p => (p.align === 'right' ? 'left: 8rem;' : 'left: -8rem;')};
`
