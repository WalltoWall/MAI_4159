import styled from 'react-emotion'

import t from 'theme'
import { ReactComponent as AssetIconArrowDownSVG } from 'assets/yellow-arrow.svg'

export const Container = styled.a`
  align-items: center;
  display: inline-flex;
  color: ${t.c.redBrand};
  transition: color ${t.t};
  &:hover {
    color: ${t.c.redDark};
  }
`

export const IconContainer = styled.div`
  align-items: center;
  background: linear-gradient(to bottom, ${t.c.red}, ${t.c.redDark});
  border-radius: 100%;
  display: flex;
  height: ${t.s(1)};
  justify-content: center;
  margin-right: ${t.s(-2)};
  overflow: hidden;
  width: ${t.s(1)};
`

export const Icon = styled(AssetIconArrowDownSVG)`
  display: block;
  height: 50%;
  transform: rotate(180deg);
  transform: translateY(${p => (p.isExpanded ? '-5%' : '5%')})
    scaleY(${p => (p.isExpanded ? -1 : 1)});
  transition: transform ${t.t};
  width: 50%;
`
