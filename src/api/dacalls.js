

const clientId = process.env.GATSBY_DEVIANTART_CLIENT_ID
const clientSecret = process.env.GATSBY_DEVIANTART_CLIENT_SECRET
export default async function handler(req, res) {
  try {
    console.log("clientId:", clientId)
    console.log("clientSecret:", clientSecret)

    if (!clientId || !clientSecret) {
      return res.status(500).json({ error: "Missing DeviantArt credentials" })
    }

    // Correct OAuth2 token request
    const response = await axios.post(
      "https://www.deviantart.com/oauth2/token",
      null,
      {
        params: {
          grant_type: "client_credentials",
          client_id: clientId,
          client_secret: clientSecret,
        },
      }
    )

    return res.json({ token: response.data })
  } catch (error) {
    console.error("Login failed:", error.response?.data || error.message)
    return res.status(500).json({ error: "Failed to login" })
  }
}
