const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const port = 3030;

const dbName = 'test';

const app = express();

const authEndpoint = require('./routes/auth');
app.use(authEndpoint)

const routes = require('./routes/user_routes');
app.use(routes);

//Middleware
app.use(cors());
app.use(express());

async function start() {

  try {

    await mongoose.connect(process.env.DB_URL + dbName)
    app.listen(port, () => {
      console.log(`server attivo sulla porta: ${port}`)
    })

  } catch (err) {
    console.error(err)
  }
}

start();
