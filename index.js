
const express = require('express');
const bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.json());
require('./routes/dialogflowRoutes')(app);

const newLocal_2 = 5000;
const newLocal_1 = newLocal_2;
const newLocal = newLocal_1;
const PORT =process.env.PORT || newLocal;
app.listen(PORT);

