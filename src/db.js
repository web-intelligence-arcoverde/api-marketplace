
//const mongoose = require("mongoose");

//mongoose
  //.connect("mongodb://localhost/petfood", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
  //})
  //.then(() => {
    //console.log("database connected");
 // })
  //.catch(err => {
    //console.log("Could not connect", err);
  //});

  ///
  const mongoose = require("mongoose");

  try {
    let connect = mongoose.connect(
      "mongodb+srv://teste:Password@cluster0.3ecyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
  
    );
    module.exports = connect;
  } catch (err) {
    console.log("este aqui foi o erro" + err);
  }
  