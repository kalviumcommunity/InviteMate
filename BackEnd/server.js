require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const downloadRoutes = require("./routes/downloads");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/editing", downloadRoutes);
// app.get('/',(req,res) => {
//     res.json({msg:'Welcome to the port 4000 now'})
// })

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
 