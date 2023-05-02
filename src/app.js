import express from "express"; 
import dbConnection from "./config/dbConnect.js"
import books from "./Models/Book.js";

dbConnection.on("error", console.log.bind(console, 'Erro de conexão'))
dbConnection.once("open", () => {
    console.log('MongoDb connection success')
})



const app = express();

app.use(express.json())

// let books = [
//     {Id: 1, "Titulo": "Domain Drivem Design"},
//     {Id: 2, "Titulo": "Clean Code"}
// ]

app.get('/', (req, res) => {
    res.status(200).send('Libery System');
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.get('/books/:Id', (req, res) => {
    let index = FindBook(req.params.Id);
    res.json(books[index]);
})

app.post('/books', (req, res) =>{
    books.push(req.body);
    res.status(201).send('Book was register!')
})

app.put('/books/:Id', (req, res) => {
    let index = FindBook(req.params.Id);
    books[index].Titulo = req.body.Titulo;
    res.json(books);
})

app.delete('/books/:Id', (req, res) => {
    let {id} = req.params;
    let index = FindBook(id);
    books.splice(index, 1);
    res.send(`Book ${id} was removed with success`);
})


function FindBook(id){
    return books.findIndex(book => book.Id == id)
}

export default app