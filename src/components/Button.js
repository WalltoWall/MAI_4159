import styled from 'react-emotion'

import t from '../theme'
import { Link } from './Link'

const Button = styled(Link)`
	background-color: ${t.c.yellow};
	color: white;
	cursor: pointer;
	font-family: ${t.ff.sans};
	font-weight: 700;
	letter-spacing: 1px;
	padding: ${p => p.small ? t.s(-2, -0) : t.s(-1, 2)};
	font-size: ${p => p.small ? t.f(-1) : t.f(0.5) };
	display: block;
	width: 200px;
	text-align: center;
	text-transform: uppercase;
	font-size: ${t.f(2)};
	margin: 0 auto;
`

export default Button