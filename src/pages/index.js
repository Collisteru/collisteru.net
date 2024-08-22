import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import QuoteOfTheDay from "../utils/QuoteOfTheDay"

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/other/home/" }) {
      html
    }
  }
`

function get_content(data) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  console.log(markdownRemark)
  const html_to_render = { __html: html }
  return html_to_render
}

const Index = ({ data }) => {
  const html_to_render = get_content(data)

  return (
    <Layout quote={<QuoteOfTheDay />}>
      <div dangerouslySetInnerHTML={html_to_render} />
    </Layout>
  )
}

export const Head = () => <Seo title="Collisteru" />

export default Index
