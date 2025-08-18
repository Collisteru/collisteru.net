import axios from "axios"

const clientId = process.env.DEVIANTART_CLIENT_ID
const clientSecret = process.env.DEVIANTART_CLIENT_SECRET

let cachedToken = null
let tokenExpiry = 0

export async function getAccessToken() {
  const now = Date.now()

  if (cachedToken && now < tokenExpiry) {
    return cachedToken
  }

  console.log("getting token")

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
  console.log("response: ", response.data)

  cachedToken = response.data.access_token
  tokenExpiry = now + response.data.expires_in * 1000 // expires_in is in seconds

  return cachedToken
}
