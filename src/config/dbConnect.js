import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joiagustavo:guxteJP98@libraryclustersystem.bvjiuuf.mongodb.net/Library-Node-System");

let dbConnection = mongoose.connection;   
export default dbConnection;