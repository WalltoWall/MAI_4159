import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Layout } from 'components/Layout'
import { ProjectBodyHero } from 'slices/ProjectBodyHero'
import { ProjectBodyCategories } from 'slices/ProjectBodyCategories'


const ProjectTemplate = ({ data }) => (
  <>
    <Helmet title={get(data, 'prismicProject.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicProject.data.body')}
        map={{
          ProjectBodyHero,
          ProjectBodyCategories,
        }}
        page={get(data, 'prismicProject')}
        rootData={data}
      />
    </Layout>
  </>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplate($id: String!) {
    prismicProject(id: { eq: $id }) {
      data {
        title {
          text
        }
        body {
          __typename
        }
      }
    }
    ...ProjectBodyHero
    ...ProjectBodyCategories
  }
`
