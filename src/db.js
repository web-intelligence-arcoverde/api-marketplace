
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/petfood", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("database connected");
  })
  .catch(err => {
    console.log("Could not connect", err);
  });