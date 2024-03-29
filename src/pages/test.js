import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

require(`katex/dist/katex.min.css`)

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/other/test/" }) {
      html
    }
  }
`

function get_content(data) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const html_to_render = { __html: html }
  console.log(html_to_render)
  return html_to_render
}

const Test = ({ data }) => {
  const html_to_render = get_content(data)

  return (
    <Layout>
      <div dangerouslySetInnerHTML={html_to_render} />
    </Layout>
  )
}

export default Test
