import styled from 'react-emotion'
import t from 'theme'
import { ReactComponent as AssetIconSearchSVG } from 'assets/icon-search.svg'

export const Container = styled.div`
  background: ${t.c.darkgrey2};
  color: ${t.c.white};
  position: relative;
  top: 0;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
  padding: ${t.s(1)} ${t.s(0)};
`
export const MobileSearchIcon = styled.div`
  position: absolute;
  top: ${t.s(0)};
  left: ${t.s(0)};
  z-index: 5;
  display: block;
  ${t.mq.l} {
    display: none;
  }
`
export const SearchButtonIcon = styled(AssetIconSearchSVG)`
  cursor: pointer;
  height: ${t.s(1)};
  margin: 0.6rem 0.1rem;
  transform: translate(-10%, -5%);
  width: ${t.s(1)};
`
