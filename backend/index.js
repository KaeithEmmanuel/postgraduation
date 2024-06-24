const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const DbConfig = require('./db.js');  // Ensure this file initializes the database
const competitiveRoutes = require('./Routes/CompetitiveData.js');
const higherStudiesRoutes = require('./Routes/HigherStud.js');

// Initialize dotenv for environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', competitiveRoutes);
app.use('/api', higherStudiesRoutes);

// Define the port
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});
