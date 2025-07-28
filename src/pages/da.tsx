import * as React from "react"
import { graphql } from "gatsby"
import Plot from "react-plotly.js"
import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/other/now/" }) {
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

const DAWidget = () => {
  const data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "blue" },
    },
  ]

  const layout = { width: 600, height: 400, title: "Sample Plot" }

  return (
    <div>
      <Plot data={data} layout={layout} />
    </div>
  )
}

const DA = ({ data }) => {
  const html_to_render = get_content(data)

  return (
    <Layout>
      <DAWidget></DAWidget>
      <div>Hello!</div>
    </Layout>
  )
}

export const Head = () => <Seo title="Collisteru: Now" />

export default DA
