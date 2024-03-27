import * as React from "react"
import Bio from "../components/bio"

import { Link, graphql, useStaticQuery } from "gatsby"

const About = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "About" } }) {
        html
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  return <Bio data={data} location={location} />
}

export default About
