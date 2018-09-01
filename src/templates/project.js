import React from 'react'
import Helmet from 'react-helmet'
import MapToComponents from 'react-map-to-components'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import { Layout } from 'components/Layout'
import {ProjectLayoutHero} from 'slices/ProjectLayoutHero'
import {ProjectLayoutFullImage} from 'slices/ProjectLayoutFullImage'
import {ProjectLayoutSideBySideImages} from 'slices/ProjectLayoutSideBySideImages'
import {ProjectLayoutCallToAction} from 'slices/ProjectLayoutCallToAction'
import {ProjectLayoutFeatureList} from 'slices/ProjectLayoutFeatureList'

const ProjectTemplate = ({ data }) => (
  <>
    <Helmet title={get(data, 'prismicProject.data.title.text')} />
    <Layout>
      <MapToComponents
        getKey={x => x.id}
        getType={x => x.__typename.replace(/^Prismic/, '')}
        list={get(data, 'prismicProject.data.layout')}
        map={{
          ProjectLayoutHero,
          ProjectLayoutFullImage,
          ProjectLayoutSideBySideImages,
          ProjectLayoutCallToAction,
          ProjectLayoutFeatureList,
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
        layout {
          __typename
        }
      }
    }
    ...ProjectLayoutHero
    ...ProjectLayoutFullImage
    ...ProjectLayoutSideBySideImages
    ...ProjectLayoutCallToAction
    ...ProjectLayoutFeatureList
  }
`
