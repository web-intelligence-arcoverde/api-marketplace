const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
//
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
//
app.listen(PORT, () =>{

    console.log (`SERVIDOR RODANDO NA PORTA ${PORT}`);
});