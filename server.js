//setup fot the project
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

app.use("/tasks", require("./taskRoutes"));

//access port environmental variable and listen it
const port = process.env.PORT;
app.listen(port, () => {console.log(`This app is running on port ${port}`)});

//some tool to parse JSON and urlencoded data requests
app.use(express.json());
app.use(express.urlencoded({extended: false}));
