const express = require('express');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.json());
require('./routes/dialogflowRoutes')(app);

//const newLocal = request(app.callback());

//const newLocal_1 = 3000;

const newLocal = 5000;
const PORT =process.env.PORT || newLocal;
app.listen(PORT);

