import * as React from "react"
import { Link } from "gatsby"

function romanize(num) {
  if (isNaN(num)) return NaN
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman
  return Array(+digits.join("") + 1).join("M") + roman
}

const Layout = ({ children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  header = (
    <div className="header-container">
      <h1 className="main-heading">
        <Link to="/">Collisteru</Link>
      </h1>
      <div className="minor-header-links-container">
        <Link to="/now" className="minor-header-link">
          NOW
        </Link>
        <Link to="/software" className="minor-header-link">
          SOFTWARE
        </Link>
        <Link to="/contact" className="minor-header-link">
          CONTACT
        </Link>
        <Link to="/about" className="minor-header-link">
          ABOUT
        </Link>
        <Link to="/" className="minor-header-link">
          BLOG
        </Link>
      </div>
    </div>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main id="content">{children}</main>
      <div class="filler-150px"></div>
      <footer className="global-footer">
        © {romanize(new Date().getFullYear())}
      </footer>
    </div>
  )
}

export default Layout
