const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express(); // create express app
var indexRouter = require('./router');



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
app.use(express.json());
app.use('/', indexRouter);
app.use(cors());
// add middlewares
let root = require('path').join(__dirname, 'build');
if(process.env.NODE_ENV === "development"){
  app.use(express.static(root));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
} else if (process.env.NODE_ENV === "production"){
  root = require('path').join(__dirname, "..","client","build")
  app.use(express.static(root));
  app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client','build', 'index.html'));
  });
}

// start express server on port 5000
app.listen(process.env.PORT || 5000, () => {
  console.log('server started');
});

