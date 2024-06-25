// src/components/QuoteOfTheDay.js
import React from "react"
import {
  useQuoteQuery,
  useChooseQuote,
  useShuffleQuotes,
} from "../utils/quotefuncs"

const QuoteOfTheDay = () => {
  // TODO: Finish this

  const quote = useChooseQuote()

  useShuffleQuotes()

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
