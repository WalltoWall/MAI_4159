import styled from 'react-emotion'
import t from 'theme'
import { ReactComponent as TwitterIcon} from 'assets/twitter_icon.svg'
import { ReactComponent as InstagramIcon} from 'assets/instagram_icon.svg'
import { ReactComponent as LinkedinIcon} from 'assets/linkedin_icon.svg'
import { Link } from 'components/Link'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: ${t.s(4)} ${t.s(1)};
  ${t.mq.l} {
    padding: ${t.s(4)} ${t.s(5)};
  }
`

export const ImageContainer = styled.div`
  height: ${t.s(9)};  
  width: 100%;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
  .gatsby-image-wrapper {
    height: 100%;
  }
  ${t.mq.l} {
    width: 35%;    
    padding: 0 ${t.s(5)} 0 0;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;    
  ${t.mq.l} {    
    width: 35%;
    padding: 0 0 0 ${t.s(2)};
  }
  h2 {
    font-family: ${t.ff.sans};
    color: ${t.c.darkgrey1};
    font-size: ${t.f(5)};
    text-transform: uppercase;  
    margin: ${t.s(0)} 0 0 0;
  }
  h3 {
    font-family: ${t.ff.sans};
    font-size: ${t.f(5)};
    color: ${t.c.darkgrey2};
    text-transform: uppercase;  
    margin: 0;
  }
  p {
    font-family: ${t.ff.sans};
    color: ${t.c.darkgrey1};
    font-size: ${t.f(3)};
    ${t.mq.l} {         
      padding: 0 ${t.s(4)} 0 0;
    } 
  }
  span {
    font-family: ${t.ff.sans};
    color: ${t.c.darkgrey2};
    font-size: ${t.f(2)};
  }
`

export const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 25%;  
  height: 100%;  
  margin-top: ${t.s(2)};
`

export const StyledLink = styled(Link)`
  display: block;  
  width: 25%;
  height: 100%;
`

export const StyledLinkedinIcon = styled(LinkedinIcon)`
  fill: ${t.c.yellow};
  :hover {
    fill: black;
  }  
`

export const StyledInstagramIcon = styled(InstagramIcon)`
  fill: ${t.c.yellow};  
`

export const StyledTwitterIcon = styled(TwitterIcon)`
  fill: ${t.c.yellow};  
`