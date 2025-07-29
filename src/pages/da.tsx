import * as React from "react"
import { graphql } from "gatsby"
import Plot from "react-plotly.js"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAllDeviations } from "../apis/dacalls.ts"

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/content/other/now/" }) {
      html
    }
  }
`

function get_content(data) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  const html_to_render = { __html: html }
  return html_to_render
}
const DAWidget = () => {
  const [username, setUsername] = React.useState("")

  const data = [
    {
      x: [1, 2, 3, 4],
      y: [10, 15, 13, 17],
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "blue" },
    },
  ]

  const layout = { width: 600, height: 400, title: "Sample Plot" }

  const handleSearch = () => {
    var deviations = 0
    console.log("Fetching data for:", username)
    try {
      var deviations = fetchAllDeviations(username)
    } catch {
      console.log("Fetch failed")
    }
    console.log("Retrieved deviations: ", deviations)
    // Later: connect to DeviantArt API here
  }

  return (
    <div
      className="flex flex-col items-center gap-6 p-6 bg-gray-50 rounded-xl shadow-md space-y-4"
      style={{ margin: "40px" }}
    >
      {/* Title */}
      <h1>DeviantArt User Statistics</h1>
      {/* Username Input and Button */}
      <div className="flex gap-3 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Enter DeviantArt username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <button
          onClick={handleSearch}
          disabled={!username.trim()}
          className={`px-5 py-2 rounded-lg font-medium text-white transition 
            ${
              username.trim()
                ? "bg-blue-600 hover:bg-blue-700 shadow"
                : "bg-gray-400 cursor-not-allowed"
            }`}
        >
          Search
        </button>
      </div>
      <div className="w-8" /> {/* 8px spacer */}
      <div style={{ height: "40px" }} /> {/* Vertical spacer */}
      {/* Plot */}
      <div>
        <Plot
          data={data}
          layout={layout}
          style={{
            borderStyle: "solid",
            borderWidth: "4px",
            borderColor: "var(--dark-blue)",
          }}
        />
      </div>
    </div>
  )
}

const DA = ({ data }) => {
  const html_to_render = get_content(data)

  return (
    <Layout>
      <DAWidget />
    </Layout>
  )
}

export const Head = () => <Seo title="DeviantArt User Stats" />

export default DA
