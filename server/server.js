// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const mainRoute = require('./mainRoute');


// mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {console.log('Database is connected') })
    .catch( err => { console.log('Can not connect to the database'+ err)});

app.use(cors());
app.use(express.json())

app.use('/person', mainRoute);

app.use( ( req, res, next) => {
  res.status( 404);
  next( new Error( "404 - Not Found"))
});

app.use( function (err, req, res, next) {
  if( res.status === 200) res.status( 500)
  res.json( { msg: err.message})
})

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});