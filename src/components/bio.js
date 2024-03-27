/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Bio = () => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  // const author = inputData.site.siteMetadata?.author
  // const social = inputData.site.siteMetadata?.social

  return (
    <Layout>
      <div>Hello?</div>
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/icon.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {
          <p>
            Written by <strong>Collisteru</strong> [INSERT AUTHOR SUMMARY HERE]
            {` `}
          </p>
        }
      </div>
    </Layout>
  )
}

export default Bio
