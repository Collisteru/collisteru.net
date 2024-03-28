import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
const About = () => {
  return (
    <Layout>
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

export default About
