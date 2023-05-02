import express from "express"; 
import bookRouts from "./BookRouts.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Title: "Library System Node"})
    })
    app.use(
        express.json(),
        bookRouts
    )
}

export default routes