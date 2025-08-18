// const DeviantArt = require("deviantart")
require("dotenv").config()
const express = require("express")
const axios = require("axios")
const app = express()

const clientId = process.env.DEVIANTART_CLIENT_ID
const clientSecret = process.env.GATSBY_DEVIANTART_CLIENT_SECRET

module.exports = app
app.get("/api/login", async (req, res) => {
  console.log("Client ID:", process.env.DEVIANTART_CLIENT_ID)
  console.log("Client Secret:", process.env.DEVIANTART_CLIENT_SECRET)

  try {
    console.log("Client ID:", process.env.DEVIANTART_CLIENT_ID)
    console.log("Client Secret:", process.env.DEVIANTART_CLIENT_SECRET)

    const token = await loginToDeviantArt()
    res.json(token) // Send token or response back to the client
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to login to DeviantArt" })
  }
})

// Export as a Gatsby Function
module.exports = app
async function loginToDeviantArt() {
  if (!clientId || !clientSecret) {
    throw new Error("Missing DeviantArt API credentials")
  }
  console.log("clientId: ", clientId)
  console.log("clientSecret:", clientSecret)

  const response = await axios.post(
    "https://www.deviantart.com/api/v1/oauth2/placebo",
    null,
    {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
      },
    }
  )

  console.log("Logged in: ", response.data)
  return response.data
}

// export async function fetchAllDeviations(user: string) {
//   let offset = 0

//   console.log("Fetch deviations passed with param: ", user)
//   // Login to DeviantArt
//   loginToDeviantArt()

// while (true) {
//   const response = await deviantArt.gallery.all({
//     username: user,
//     offset: offset,
//     limit: 24,
//   })

//   const chunk = response.results.map((d: any) => ({
//     title: d.title,
//     views: d.stats?.views || 0,
//     favourites: d.stats?.favourites || 0,
//     comments: d.stats?.comments || 0,
//   }))

//   allDeviations.push(...chunk)

//   // console.log("Pushed");

//   if (!response.has_more || response.next_offset == null) break

//   offset = response.next_offset
// }

//   console.log(allDeviations)
//   console.log("Deviation retrieval successful")
//   return allDeviations
// }

// export async function fetchUserStats(username: string) {
//   // We're interested in number of follows and number of deviations

//   // Login to DeviantArt
//   const deviantArt = await DeviantArt.login(
//     process.env.DEVIANTART_CLIENT_ID!,
//     process.env.DEVIANTART_CLIENT_SECRET!
//   )

//   const response = await deviantArt.user.profile({ username })
//   return response.stats
// }

// export async function artistAnalysis(username: string) {
//   fetchUserStats(username)
//   fetchAllDeviations(username)
// }
