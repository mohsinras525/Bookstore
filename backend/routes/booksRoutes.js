const express = require('express')
const router = express.Router()
const {getAllBooks} = require('../controller/BooksController')

router.route('/getallbooks').get(getAllBooks)




module.exports = router 