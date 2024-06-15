// src/components/Quote.js
import React, { useEffect, useState } from "react"
import getDailyQuote from "../utils/getDailyQuote"

const Quote = () => {
  const [quote, setQuote] = useState(null)

  useEffect(() => {
    const fetchQuote = async () => {
      const fetchedQuote = await getDailyQuote()
      setQuote(fetchedQuote)
    }

    fetchQuote()
  }, [])

  if (!quote) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <blockquote>
        "{quote.quote}"{quote.author && <footer>- {quote.author}</footer>}
      </blockquote>
    </div>
  )
}

export default Quote
