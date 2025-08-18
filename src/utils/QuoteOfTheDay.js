// src/components/QuoteOfTheDay.js
import React from "react"
import { useChooseQuote } from "../utils/quotefuncs"

const QuoteOfTheDay = () => {
  // TODO: Finish this

  const quote = useChooseQuote()

  const author = quote.author ? "- " + quote.author : ""

  const source = quote.work ? "From: " + quote.work : ""

  return (
    <div>
      <div className="quote-outer-div">
        <div id="dailyquote-container">
          <div className="side-decoration"></div>
          <label>
            <a className="invisible_link" href="/quotes">
              <span></span>
            </a>
          </label>
          <div id="dailyquote-and-author">
            <h3>Quote of The Day:</h3>
            <hr></hr>
            <blockquote id="dailyquote">{quote.quote} </blockquote>
            <div id="dailyquoteauthor">
              <em>{author}</em>
            </div>
            <div style={{ height: "20px" }}> </div>
            <div style={{ fontSize: "12px" }}>{source}</div>
          </div>
          <div className="side-decoration"></div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default QuoteOfTheDay
