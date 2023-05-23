require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const fs = require('fs')

const downloadRoutes = require("./routes/downloads");

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/editing", downloadRoutes);

app.get('/',(req,res) => {
    res.json({res})
})

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on port", process.env.PORT);
      fs.appendFileSync("Connection.txt", "BackendServer connected to MongoDB\n");
    });
  })
  .catch((error) => {
    console.log(error);
  });
