require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');


// const { createProduct } = require('./controller/Product');
const apiRouter = require('./routes/api');


const path = require('path');
const { env } = require('process');

server.use(express.json()); // to parse req.body
server.use(express.raw({type: 'application/json'}));

server.use('/api', apiRouter.router);


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Database Started');
}

server.listen(process.env.PORT, () => {
  console.log('server started');
});