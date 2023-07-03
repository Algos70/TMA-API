//setup fot the project
const express = require("express");
const dotenv = require("dotenv").config();

//access port environmental variable and listen it
const port = process.env.PORT;

// connect the database to the server
const connectDB = require("./db");
connectDB();

const app = express();

//some tool to parse JSON and urlencoded data requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/tasks", require("./taskRoutes"));

app.listen(port, () => {console.log(`This app is running on port ${port}`)});

