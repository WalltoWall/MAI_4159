import styled, { keyframes } from 'react-emotion'
import Modal from 'react-modal'
import { css } from 'emotion'
import { transparentize } from 'polished'

import t from 'theme'
import { ReactComponent as AssetIconCloseXSVG } from 'assets/icon-close-x.svg'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const overlayClassName = css`
  animation: ${fadeIn} ${t.t};
  background: none;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
`

export const Container = styled(Modal)`
  -webkit-overflow-scrolling: touch;
  background-color: ${transparentize(0.1, 'white')};
  box-shadow: 0px -8px 36px ${t.c.black};
  border-bottom: 4px solid ${t.c.yellow};
  color: ${t.c.black};
  font-family: ${t.ff.sans};
  font-size: ${t.f(0)};
  left: 50%;
  line-height: ${t.lh.copy};
  max-height: 100%;
  outline: none;
  overflow: auto;
  position: absolute;
  top: 0;
  transform: translate(-50%, -0%);
  width: 100%;
  animation: 150ms ease-in slidein;
  @keyframes slidein {
    from {
      transform: translate(-50%, -${t.s(7)});
    }
    to {
      transform: translate(-50%, 0);
    }
  }
`

export const Content = styled.div`
  background-position: center top;
  background-size: 100%, ${t.s(8)};
  height: 100%;
  padding: ${t.s(3.5)} 0;
  width: 70%;
  margin: 0 auto;

  ${t.mq.m} {
    padding: ${t.s(3.5)} 0;
  }
  ${t.mq.l} {
    width: 50%;
  }
`

export const CloseButton = styled.button`
  -webkit-appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: ${t.s(1)};
  position: absolute;
  right: 1%;
  top: 25%;
  ${t.mq.l} {
    top: 25%;
  }
  z-index: 10;
`

export const CloseIcon = styled(AssetIconCloseXSVG)`
  display: block;
  height: ${t.s(0.5)};
  transform: translateZ(0);
  transition: transform ${t.t};
  width: ${t.s(0.5)};

  ${CloseButton}:hover & {
    transform: scale(1.1) translateZ(0);

    path {
      stroke: ${t.c.black};
    }
  }

  path {
    stroke: ${t.c.darkgrey1};
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }
`
