import React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Toggle } from 'react-powerplug'
import { 
  Desktop, 
  Mobile, 
  StyledLink,
  FilterBox,
  CurrentFilter,
} from './index.styled'

export class PageLayoutCategoriesBar extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    
  }

  render() {
    const categories = get(this.props, 'data.items')
    return (
      <>
        <Desktop>
          {categories.map(item => (
            <StyledLink key={get(item, 'name.text')} to={get(item, 'url.url', '/')}   >
              {get(item, 'name.text')}              
            </StyledLink>
          ))}
        </Desktop>
        <Toggle>
          {({on, toggle}) => 
            <Mobile> 
              <span>Filter: </span>
              <CurrentFilter onClick={toggle}>active filter name</CurrentFilter>
              <FilterBox isOpen={on}>
                {categories.map(item => (
                  <StyledLink key={get(item, 'name.text')} to={get(item, 'url.url', '/')}   >
                    {get(item, 'name.text')}              
                  </StyledLink>
                ))}
              </FilterBox>
            </Mobile>
          }
        </Toggle>
      </>
    )
  }
}

export const query = graphql`
  fragment PageLayoutCategoriesBar on Query {
    prismicPage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicPageLayoutCategoriesBar {
            id
            items {
              name {
                text
              }
              url1 {
                url
              }
            }
          }
        }
      }
    }
  }
`