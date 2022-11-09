const Book = require("../models/BooksModel")

exports.getAllBooks = ( req, res, next ) => {

    res.status(200)
    res.json({
        success:true,
        message:"Routes wprking fine"
    })
    // let book ;
    // try {
    //     book = await Book.find()

    //     if(!book){
            
    //     }
    // } catch (error) {
        
    // }
}