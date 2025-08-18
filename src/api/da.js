import axios from "axios"

const clientId = process.env.GATSBY_DEVIANTART_CLIENT_ID
const clientSecret = process.env.GATSBY_DEVIANTART_CLIENT_SECRET

export default async function handler(req, res) {
  console.log("Now in the da endpoint")
}
