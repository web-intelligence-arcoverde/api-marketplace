const express = require('express');

const roleRoutes = require('./src/routes/role.routes');

const app = express();

const cors = require('cors');

app.use(express.json());

const morgan = require('morgan');

var corsOptions = {
  origin: 'http://localhost:8040',
};

const PORT = process.env.PORT || 8040;

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));

require('./database');

app.use(morgan('dev'));
app.use('/v1/api', roleRoutes);

app.listen(PORT, () => {
  console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`);
});
