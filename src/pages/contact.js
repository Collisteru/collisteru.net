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
    markdownRemark(fileAbsolutePath: { regex: "content/other/contact.md" }) {
      html
    }
  }
`

const Contact = ({ data }) => {
  console.log("Data below:")
  console.log(data)
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout>
      <div>
        <MDXRenderer>{html}</MDXRenderer>
      </div>
    </Layout>
  )
}

export default Contact
