const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/key').MongoURI;
const user = require('./routes/user');

app.use(bodyParser.json());

app.use('/users',user);


mongoose.connect(db, { useNewUrlParser:true ,useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));


app.listen(3000);