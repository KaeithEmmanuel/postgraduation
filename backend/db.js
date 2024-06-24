const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoUrl = "mongodb+srv://Kaeithemmanuel:Kaeith2004@cluster0.14wxevw.mongodb.net/HigherStudies";

if (!mongoUrl) {
    console.error("Error: MONGO_URL is not defined in the .env file.");
    process.exit(1);
}

mongoose.connect(mongoUrl).catch(error => {
    console.error("Initial connection error:", error);
    process.exit(1); // Exit the process if the initial connection fails
});

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log("MongoDB is connected");
});

connection.on('error', (error) => {
    console.log("Error in MongoDB connection", error);
});

module.exports = mongoose;
