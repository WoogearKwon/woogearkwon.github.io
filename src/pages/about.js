import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>권욱일</h1>
      <p>아내와 아들과 함께 행복하게 살고 있습니다.
      개발자가 된 것도 행복하지만, 사랑하는 가족이 생겨서 더 행복합니다.</p>
      <p>이야기를 좋아하고 영화를 좋아합니다.</p>



    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`


