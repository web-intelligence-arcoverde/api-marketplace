const mongoose = require('mongoose');

//
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndyMofy', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('debug', true);
//
try {
    let connect = mongoose.connect(
      "mongodb+srv://teste:Password@cluster0.3ecyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
  
    );
    module.exports = connect;
  } catch (err) {
    console.log("este aqui foi o erro" + err);
  }