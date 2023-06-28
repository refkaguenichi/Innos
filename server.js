//import express
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const app = express();
// app.use(formidableMiddleware());
//-------------------------------------
require("dotenv").config();
//connect with database
connectDB();
//payment middleware
app.use(cors());

//Global middlware to read json type
app.use(express.json());

app.use('/api/articles', require('./router/articles'))
app.use('/api/auth', require('./router/user'))
//port
PORT = process.env.PORT;
//start the server
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});