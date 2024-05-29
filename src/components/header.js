import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">"Collisteru"</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        "Collisteru"
      </Link>
    )
  }

  // Script imports go inside the head element
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <head>
        <script
          type="text/javascript"
          src="//counter.websiteout.com/js/19/7/0/1"
        ></script>
      </head>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
