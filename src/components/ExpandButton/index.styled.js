import styled from 'react-emotion'

import t from 'theme'
import { ReactComponent as AssetIconArrowDownSVG } from 'assets/yellow-arrow.svg'

export const Container = styled.a`
  align-items: center;
  display: inline-flex;
`

export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${t.s(1)};
  justify-content: center;
  margin-right: ${t.s(-2)};
  overflow: hidden;
  width: ${t.s(1)};
`

export const Icon = styled(AssetIconArrowDownSVG)`
  display: block;
  height: 70%;
  transform: rotate(180deg);
  transform: rotate(${p => (p.isExpanded ? '90deg' : '0')});
  transition: transform ${t.t};
  width: 70%;
`
