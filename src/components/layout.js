import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <div className="header-container">
        <h1 className="main-heading">
          <Link to="/">Collisteru</Link>
        </h1>
        <div className="minor-header-links-container">
          <Link to="/index" className="minor-header-link">
            BLOG
          </Link>
          <Link to="/" className="minor-header-link">
            ABOUT
          </Link>
          <Link to="/" className="minor-header-link">
            CONTACT
          </Link>
          <Link to="/" className="minor-header-link">
            SOFTWARE
          </Link>
          <Link to="/" className="minor-header-link">
            NOW
          </Link>
        </div>
      </div>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main id="content">{children}</main>
      <footer className = "global-footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
