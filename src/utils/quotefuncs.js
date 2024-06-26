import { graphql, useStaticQuery } from "gatsby"
import { randSeed } from "../utils/randomseeded"

// All these functions are defined as hooks so that they can use the static query
// to get data from the GraphQL layer.

// Fisher-Yates Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

export function useQuoteQuery() {
  const data = useStaticQuery(graphql`
    query {
      allQuotesCsv {
        nodes {
          quote
          author
        }
      }
      allQuoteOrderCsv {
        nodes {
          index
        }
      }
    }
  `)

  return data
}

export function useChooseQuote() {
  const data = useQuoteQuery()

  const today = new Date()
  const quoteEpoch = new Date("June 21, 2024 00:00:00")
  const millisDiff = today - quoteEpoch

  // E is the number of days since the epoch.
  // This tells us when the quote should change.
  const E = Math.trunc(millisDiff / (1000 * 60 * 60 * 24))

  const Q = data.allQuotesCsv.nodes.length

  // Each round is a complete run-through past the quotes
  const rounds = Math.floor(E / Q)

  // The place is which quote we are on in the current round
  const place = E % Q

  var quoteListCopy = data.allQuotesCsv.nodes.slice()
  var n = quoteListCopy.length

  var pickedQuote = ""

  // Now, reach today's place in the current round
  for (let i = 0; i < place + 1; i++) {
    if (n === 0) {
      quoteListCopy = data.allQuotesCsv.nodes.slice()
      n = quoteListCopy.length
    }
    // Seed the random number generator so that the result is the same for everyone
    var seededNum = randSeed((rounds * Q + i).toString())
    var index = Math.floor(n * seededNum())
    pickedQuote = quoteListCopy[index]

    // Delete pickedQuote from quoteListCopy
    quoteListCopy.splice(index, 1)

    n = quoteListCopy.length
  }

  return pickedQuote
}
