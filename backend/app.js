const express = require('express')
const app = express()

app.use(express.json());

const books = require("./routes/booksRoutes")
app.use('/api/v1',books)

module.exports = app