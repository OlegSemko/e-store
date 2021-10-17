const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const userRoute = require('./routes/users');
const productRoute = require('./routes/products');
const orderRoute = require('./routes/orders');

app.use(bodyParser.json());
app.use('/users', userRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);
app.get('/', (req, res) => {
  res.send('home page');
});
app.use((req, res, next) => {
  res.status(404).send('Not found');
});

app.listen(port);
