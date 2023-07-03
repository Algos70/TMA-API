const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT;
app.listen(port, () => {console.log(`This app is running on port ${port}`)})