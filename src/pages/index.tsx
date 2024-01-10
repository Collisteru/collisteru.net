import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/global.css";
import { Link } from "gatsby";
// import bannerImage from "../images/banner-image.jpg"; // Adjust the path to your actual image

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      {/* Banner with linked words */}
      <div className="banner">
        <Link to="/page1">Word1</Link>
        <Link to="/page2">Word2</Link>
        <Link to="/page3">Word3</Link>
        <Link to="/page4">Word4</Link>
      </div>

      {/* Main content with a repeating background image */}
      <div className="main-content">
        <span>Welcome to Collisteru.net!!!</span>
        {/* Add more content here */}
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
