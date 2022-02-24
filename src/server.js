const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
app.use(cors());
//db
require('./src/db')
//
app.use(morgan('dev'));
app.use(express.json());
app.use('/', require('./src/routes/main.routes'));
//
app.listen(PORT, () =>{
 console.log (`SERVIDOR RODANDO NA PORTA ${PORT}`);
});