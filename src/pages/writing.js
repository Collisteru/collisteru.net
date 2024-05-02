import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Writing = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Writing</h1>
      <hr></hr>
      <table>
        <tbody>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            console.log(post.frontmatter.thumbnail)
            const image = post.frontmatter.thumbnail
            console.log("post: ", post)

            return (
              <tr key={post.fields.slug}>
                <td>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                    </header>
                  </article>
                </td>
                <td>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                  <img
                    class="pixel"
                    src={image}
                    alt={title}
                    style={{
                      width: "500px",
                      height: "auto",
                      margin: 0,
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </Layout>
  )
}

export default Writing

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          thumbnail
        }
      }
    }
  }
`
