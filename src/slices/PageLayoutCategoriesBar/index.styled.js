import styled from 'react-emotion'
import { Link } from 'components/Link'
import t from 'theme'

export const Container = styled.div`
    background-color: ${t.c.darkgrey2};
    display: flex;
    justify-content: center;
    padding: ${t.s(1)} 0;
    color: ${t.c.white};
    font-size: ${t.f(1)};
    font-weight: 700;
 `

export const StyledLink = styled(Link)`
    padding: 0 1rem;
    -webkit-transition: color .2s ease-in;
    -moz-transition: color .2s ease-in;
    -o-transition: color .2s ease-in;
    transition: color .2s ease-in;

    &:hover {
        color: ${t.c.yellow};
    }
`