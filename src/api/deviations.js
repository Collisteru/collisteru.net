import axios from "axios"
import { getAccessToken } from "./getAccessToken"

const clientId = process.env.GATSBY_DEVIANTART_CLIENT_ID
const clientSecret = process.env.GATSBY_DEVIANTART_CLIENT_SECRET

// export default async function handler(req, res) {
//   try {
//     const { username } = req.query
//     if (!username)
//       return res.status(400).json({ error: "Username is required" })

//     const deviations = await fetchAllDeviations(username)
//     return res.json({ deviations })
//   } catch (err) {
//     console.error(err.response?.data || err.message)
//     res.status(500).json({ error: "Failed to fetch deviations" })
//   }
// }

export default async function fetchAllDeviations(username) {
  console.log("In fetchAllDeviations")
  const token = await getAccessToken()
  console.log("Token: ", token)
  let offset = 0
  const limit = 24
  const allDeviations = []

  while (true) {
    const response = await axios.get(
      "https://www.deviantart.com/api/v1/oauth2/gallery/all",
      {
        params: { username, offset, limit, access_token: token },
      }
    )

    const deviations = response.data.results.map(d => ({
      title: d.title,
      url: d.url,
      views: d.stats?.views || 0,
      favourites: d.stats?.favourites || 0,
      comments: d.stats?.comments || 0,
    }))

    allDeviations.push(...deviations)

    if (!response.data.has_more || !response.data.next_offset) break
    offset = response.data.next_offset
  }

  return allDeviations
}
