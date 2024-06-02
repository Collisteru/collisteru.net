import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Dead End!</h1>
      <img
        style={{
          width: "85%",
        }}
        src="../../ultima_1_dead_end_modified.png"
        alt="a dead end in a dungeon from Ultima I: The First Age of Darkness"
      />
      <h3>404: Not Found</h3>
      <em>Try very hard to remember what you were looking for...</em>
      <p>
        Seems like you the page you've been looking for no longer exists! Or
        maybe it didn't exist in the first place.
      </p>
      <p>You can try...</p>
      <ol>
        <li>... checking the spelling of the URL</li>
        <li>
          .. checking the{" "}
          <a href="https://web.archive.org/" target="_blank" rel="noreferrer">
            Wayback Machine
          </a>{" "}
          if you believe the page you're looking for existed at some point.
        </li>
        <li>
          ... going to the <a href="./writing">index</a>.
        </li>
        <li>... or you can just stay here and enjoy the mystery.</li>
      </ol>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
