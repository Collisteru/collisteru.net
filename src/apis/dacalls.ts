import DeviantArt from "deviantart"
import fetch from "node-fetch"

// const username = "Parastos "
// require("dotenv").config({ path: "./.env" })
// console.log("CLIENT ID:", process.env.DEVIANTART_CLIENT_ID)
// console.log("CLIENT SECRET:", process.env.DEVIANTART_CLIENT_SECRET)

export async function fetchAllDeviations(user: string) {
  let offset = 0

  console.log("Fetch deviations passed with param: ", user)
  // // Login to DeviantArt
  // const deviantArt = await DeviantArt.login(
  //   process.env.DEVIANTART_CLIENT_ID!,
  //   process.env.DEVIANTART_CLIENT_SECRET!
  // )

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
}

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
