const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const morgan = require("morgan");
const PORT = process.env.PORT || 8040;
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
var corsOptions = {
  origin: "http://localhost:8040",
};
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);
require("./database");
//
app.use(morgan("dev"));
app.use("/", require("./src/routes/main.routes"));

app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});
