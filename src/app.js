import express from "express"; 

const app = express();

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

export default app