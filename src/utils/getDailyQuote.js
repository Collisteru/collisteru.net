// src/utils/getDailyQuote.js
const { getDayOfYear } = require("date-fns")
const loadQuotes = require("./loadQuotes")

const getQuoteOfTheDay = async () => {
  const quotes = await loadQuotes()
  const dayOfYear = getDayOfYear(new Date())
  const quoteIndex = dayOfYear % quotes.length
  return quotes[quoteIndex]
}

module.exports = getDailyQuote
