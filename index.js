const express = require('express');
const bodyParser = require('body-parser');

const app=express();
const
config = require('./config/keys');
app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app);

const newLocal = 5000;
const PORT =process.env.PORT || newLocal;
app.listen(PORT);

