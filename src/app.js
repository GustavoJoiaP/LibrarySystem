import express from "express"; 

const app = express();

app.use(express.json())

const books = [
    {id: 1, "Titulo": "Domain Drivem Design"},
    {id: 2, "Titulo": "Clean Code"}
]

app.get('/', (req, res) => {
    res.status(200).send('Libery System');
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.post('/books', (req, res) =>{
    books.push(req.body);
    res.status(201).send('Book was register!')
})

export default app