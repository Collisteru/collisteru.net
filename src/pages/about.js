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

  header = (
    <div className="header-container">
      <h1 className="main-heading">
        <Link to="/">Collisteru</Link>
      </h1>
    </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main id="content">
        <Bio />
      </main>
      <div class="filler-150px"></div>
      <footer className="global-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default About
