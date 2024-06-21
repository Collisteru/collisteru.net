import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// All these functions are defined as hooks so that they can use the static query
// to get data from the GraphQL layer.

// Fisher-Yates Shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// TODO: Figure out how to complete this query without creating a new component, if possible.
// TODO: You'll probably need to move all these functions into the QuoteOfTheDay component.
export function useQuoteQuery() {
  const data = useStaticQuery(graphql`
    query {
      allQuotesCsv {
        nodes {
          quote
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

// export function shuffleQuotes(array) {
//   // TODO: Get the current array as the number of quotes

//   const data = quoteQuery()

//   let currentIndex = array.length

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     let randomIndex = Math.floor(Math.random() * currentIndex)
//     currentIndex--

//     // And swap it with the current element.
//     ;[array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ]
//   }

//   // TODO: Inscribe the new order in quoteOrder.csv
// }

// export function chooseQuote() {
//   const data = quoteQuery()

//   const today = new Date()
//   const quoteEpoch = new Date("June 21, 2024 00:00:00")
//   const millisDiff = today - quoteEpoch
//   const dateDiff = Math.trunc(millisDiff / (1000 * 60 * 60 * 24))

//   const numQuotes = data.allQuotesCsv.nodes.length
//   const index = dateDiff % numQuotes

//   if (index == 0) shuffleQuotes()

//   const shuffledIndex = parseInt(data.allQuoteOrderCsv.nodes[index].index)
//   const quote = data.allQuotesCsv.nodes[shuffledIndex]
//   return quote
// }

// export function checkQuoteList() {
//   try {
//     const data = quoteQuery()
//   } catch {
//     shuffleQuotes()
//   } finally {
//     const quoteOrderLength = data.allQuoteOrderCsv.nodes.length
//     const quotesLength = data.allQuotesCsv.nodes.length

//     if (quoteOrderLength != quotesLength) {
//       shuffleQuotes()
//     }

//     chooseQuote()
//   }
// }
