import React from 'react'
import styled from 'styled-components'
import HomepageHeader from './HomepageHeader'

const Container = styled.div``

const Gradient = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
`

const HeadersContainer = styled.div`
  position: relative;
  z-index: -1;
`

const zIndexChooser = ({ isPrevious, isCurrent }) => {
  if (isPrevious) return 2
  if (isCurrent) return 3

  return 1
}

const StyledHeader = styled(HomepageHeader)`
  position: absolute;
  opacity: ${p => (p.isCurrent || p.isPrevious ? 1 : 0)};
  transition: opacity 1500ms;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${zIndexChooser};
`

export default class HeaderSlideshow extends React.Component {
  constructor() {
    super()

    this.state = {
      currentIndex: 0,
    }
  }

  componentDidMount() {
    const { items } = this.props

    setInterval(() => {
      const newIndex =
        this.state.currentIndex >= items.length - 1
          ? 0
          : this.state.currentIndex + 1

      this.setState({ currentIndex: newIndex })
    }, 3000)
  }

  render() {
    const { currentIndex } = this.state
    const { items } = this.props

    return (
      <Container>
        <Gradient />
        <HeadersContainer>
          <HomepageHeader
            headerImage={items[0].image}
            tagline={items[0].title}
          />
          {items.map((item, i) => (
            <StyledHeader
              isPrevious={
                currentIndex === (i + 1 < 0 ? items.length - 1 : i + 1)
              }
              isCurrent={currentIndex === i}
              headerImage={get(data, 'image.url')}
              tagline={get(data, 'title1.text')}
            />
          ))}
        </HeadersContainer>
      </Container>
    )
  }
}

// export const fragment = graphql`
//   fragment HeaderSlideshow on RootQueryType {
//     file(relativePath: { eq: "customPages/home.yml" }) {
//       childCustomPagesYaml {
//         heroImages: hero_images {
//           title
//           image
//         }
//       }
//     }
//   }
// `
