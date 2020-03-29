const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serveStatic = require('serve-static')
const app=express();

app.use(bodyParser.json());
require('./routes/dialogflowRoutes')(app);

app.use(serveStatic(path.join(__dirname, 'dist')))

const newLocal = 5000;
const PORT =process.env.PORT || newLocal;
app.listen(PORT);
console.log('server started ' + port)

