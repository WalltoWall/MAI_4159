import styled from 'react-emotion'

import t from '../theme'
import Link from './Link'

const Button = styled(Link)`
	color: ${t.c.darkgrey2};
	cursor: pointer;
	font-family: ${t.ff.sans};
	font-weight: 700;
	letter-spacing: 1px;
	padding: ${p => p.small ? t.s(-2, -0) : t.s(-1, 2)};
	font-size: ${p => p.small ? t.f(-1) : t.f(0.5) };
`

export default Button