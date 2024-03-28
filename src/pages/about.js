import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/other/about/" }) {
      html
    }
  }
`

function get_content(data) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const html_to_render = { __html: html }
  return html_to_render
}

const About = ({ data }) => {
  const html_to_render = get_content(data)

  return (
    <Layout>
      <div dangerouslySetInnerHTML={html_to_render} />
    </Layout>
  )
}

export default About
