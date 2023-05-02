import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        _id: {type: String},
        BookName: {type: String},
        Author: {type: String},
        Company: {type: String}
    }
);

const books = mongoose.model('Books', bookSchema);

export default books