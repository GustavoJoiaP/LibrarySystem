import express from "express"; 
import BookController from "../Controllers/BookController.js"

const router = express.Router();

router
    .get("/books", BookController.listOfBooks)

export default router;