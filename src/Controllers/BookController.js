import Books from "../Models/Book.js";

class BookController {
    static listOfBooks =  (req, res) => {
        Books.find((err, Books) => {
            res.status(200).json(Books)
          })
    }
}


export default BookController