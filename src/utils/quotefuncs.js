import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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

export function useShuffleQuotes(array) {
  // TODO: Get the current array as the number of quotes

  const data = useQuoteQuery()

  const quoteNum = data.allQuotesCsv.nodes.length

  // Generate numbers from 0 to quoteNum noninclusive
  var array = [...Array(quoteNum).keys()]

  console.log("useShuffleQuotes unshuffledSequence: ", array)

  // While there remain elements to shuffle...
  var currentIndex = array.length
  while (currentIndex !== 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  console.log("useShuffleQuotes shuffledSequence: ", array)
}

export function useChooseQuote() {
  const data = useQuoteQuery()

  const today = new Date()
  const quoteEpoch = new Date("June 21, 2024 00:00:00")
  const millisDiff = today - quoteEpoch
  const dateDiff = Math.trunc(millisDiff / (1000 * 60 * 60 * 24))

  const numQuotes = data.allQuotesCsv.nodes.length
  const index = dateDiff % numQuotes

  console.log("usechoosequote index: ", index)

  //   if (index == 0) shuffleQuotes()

  const shuffledIndex = parseInt(data.allQuoteOrderCsv.nodes[index].index)
  console.log("usechoosequote shuffledIndex: ", shuffledIndex)

  const quote = data.allQuotesCsv.nodes[shuffledIndex]
  console.log("usechoosequote quote: ", quote)
  return quote
}
