import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: {type: String},
    BookName: {type: String, required: true},
    Author: {type: String, required: true},
    Company: {type: String, required: true},
  }
);

const Books= mongoose.model('Books', bookSchema);

export default Books;