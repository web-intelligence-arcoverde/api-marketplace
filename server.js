const express = require('express');

const roleRoutes = require('./src/routes/role.routes');
const userRoutes = require('./src/routes/user.routes');
const addressRoutes = require('./src/routes/address.routes');
const marketRoutes = require('./src/routes/market.routes');

const categoryRoutes = require('./src/routes/category.routes');
const productRoutes = require('./src/routes/product.routes');
const orderRoutes = require('./src/routes/order.routes');

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

require('./src/app/database/database');

app.use(morgan('dev'));
app.use('/v1/api', roleRoutes);
app.use('/v1/api', userRoutes);
app.use('/v1/api', addressRoutes);
app.use('/v1/api', marketRoutes);
app.use('/v1/api', categoryRoutes);
app.use('/v1/api', productRoutes);
app.use('/v1/api/', orderRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
