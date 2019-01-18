import styled from 'react-emotion'
import { Form as FormikForm, Field as FormikField } from 'formik'

import t from 'theme'
import { HTMLContent } from 'components/HTMLContent'
import { Button } from 'components/Button'
import { ReactComponent as AssetIconArrowRightSVG } from 'assets/icon-arrow-right.svg'
import { ReactComponent as AssetIconLockSVG } from 'assets/icon-lock.svg'

export const Container = styled.div`
  align-items: center;
  background-color: ${t.c.darkgrey2};
  display: flex;
  margin: 0 auto;
  width: 100%;
  min-height: 90vh;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${t.ms.l};
`

export const LockIcon = styled(AssetIconLockSVG)`
  height: ${t.s(2)};
  width: ${t.s(2)};
  margin: 0 auto ${t.s(1)};
  display: block;
  path {
    fill: ${t.c.white};
  }
`

export const StyledHTMLContent = styled(HTMLContent)`
  margin-bottom: ${t.s(1)};
  text-align: center;
  color: ${t.c.white};
  font-size: 1.2rem;
`

export const UnsuccessfulMessage = styled.p`
  color: ${t.c.redBrand};
  font-size: ${t.s(-0.5)};
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const Form = styled(FormikForm)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: ${t.ms.t};
`

export const Field = styled(FormikField)`
  -webkit-appearance: none;
  border-right-width: 0;
  border: 0.05rem solid ${t.c.tanLight};
  color: ${t.c.maroon};
  flex-grow: 1;
  font-size: ${t.f(1)};
  padding: ${t.s(-1, 0)};

  &::placeholder {
    color: ${t.c.gray};
  }
`

const StyledButton = styled(Button)`
  -webkit-appearance: none;
  align-items: center;
  border: 0;
  cursor: pointer;
  display: flex;
  padding: ${t.s(-2, 0)};
  max-width: 50px;
  margin: 0;
`

export const SubmitButton = StyledButton.withComponent('button')

export const SubmitButtonIcon = styled(AssetIconArrowRightSVG)`
  height: ${t.s(0.5)};
  transform: translateX(-10%);
  width: ${t.s(0.5)};

  path {
    fill: ${t.c.white};
  }
`
