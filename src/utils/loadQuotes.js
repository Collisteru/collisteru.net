// src/utils/loadQuotes.js
const fs = require("fs")
const path = require("path")
const csv = require("csv-parser")

const loadQuotes = () => {
  const quotes = []
  const filePath = path.resolve(__dirname, "../data/quotes.csv")

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", row => {
        quotes.push(row)
      })
      .on("end", () => {
        resolve(quotes)
      })
      .on("error", error => {
        reject(error)
      })
  })
}

module.exports = loadQuotes
