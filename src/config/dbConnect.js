import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joiagustavo:guxteJP98@libraryclustersystem.bvjiuuf.mongodb.net/Library-Node-System");

let dbConnection = mongoose.connection;
dbConnection.collection("Books").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
})    
export default dbConnection;