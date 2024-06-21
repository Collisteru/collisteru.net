// src/components/QuoteOfTheDay.js
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useQuoteQuery } from "../utils/quotefuncs"

const QuoteOfTheDay = () => {
  const data = useStaticQuery(graphql`
    query {
      allQuotesCsv {
        nodes {
          quote
          author
        }
      }
    }
  `)

  // TODO: This function needs to be changed. Quotes should be shuffled based on the number of quotes in the file and the date.
  // Each year should have a different quote shuffling. Each quote has a unique index.
  // This could be done very easily by using the year as a seed for a random number generator that shuffles the quotes.
  // This shuffle should be saved each year so it doesn't have to execute whenever the page is loaded.

  // Another option is to shuffle the quotes by skipping the IDs "by" year (e.g. 2024, 4048, 12072...) modulo the number of quotes.
  // When a quote is chosen, that index is eliminated and skipped
  // I don't think "shuffling" by modulo would give me the result I wanted, as that wouldn't be random enough

  // TODO: Replace this when ready

  console.log("Results of quoteQuery function:")
  console.log(useQuoteQuery())

  const quotes = data.allQuotesCsv.nodes
  const today = new Date()
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  )
  // const quote = quotes[dayOfYear % quotes.length]
  const quote = quotes[dayOfYear % quotes.length]

  return (
    <div className="quote-outer-div">
      <div id="dailyquote-container">
        <div className="side-decoration"></div>
        <div id="dailyquote-and-author">
          <blockquote id="dailyquote">{quote.quote} </blockquote>
          <div id="dailyquoteauthor">
            - <em>{quote.author}</em>
          </div>
        </div>
        <div className="side-decoration"></div>
      </div>
      <div />
    </div>
  )
}

export default QuoteOfTheDay
