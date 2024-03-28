// import * as React from "react"
// import Layout from "../components/layout"

// const Contact = () => {
//   // Set these values by editing "siteMetadata" in gatsby-config.js
//   // const author = inputData.site.siteMetadata?.author
//   // const social = inputData.site.siteMetadata?.social

//   return (
//     <Layout>
//       <div>This is how you can contact me!</div>
//     </Layout>
//   )
// }

// export default Contact
import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/other/contact/" }) {
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

const Contact = ({ data }) => {
  const html_to_render = get_content(data)

  return (
    <Layout>
      <div dangerouslySetInnerHTML={html_to_render} />
    </Layout>
  )
}

export default Contact
